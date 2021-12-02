const creds = require("./creds.json");
const { Client } = require("pg");
const fs = require("fs");
const client = new Client(
    {
        host: creds.host,
        user: creds.user,
        password: creds.password,
        port: creds.port,
        database: creds.database
    }
);
const textFile = 'nf.txt';
const sqlFile = 'nf.sql';

function getArguments() {
    var paramstr = process.argv[2];
    var params = paramstr.split(';');
    var values = [];
    for (var i = 0; i < params.length; i++) {
		values[i] = params[i].split('=');
	}
    var table;
    var pkCols;
    var otherCols;
    for (var i = 0; i < values.length; i++) {
		if ('table' == values[i][0]) table = values[i][1];
		if ('pk' == values[i][0]) pkCols = values[i][1].split(',');
		if ('columns' == values[i][0]) otherCols = values[i][1].split(',');
	}
    return [ table, pkCols, otherCols ];
}

function fileWrite(pks, nf1, nf2, nf3, bcnf, table) {
    fs.appendFileSync(textFile, table + "\n");
    fs.appendFileSync(textFile, "PK  " + tfTOYN(pks) + "\n");
    fs.appendFileSync(textFile, "1NF  " + tfTOYN(nf1)+ "\n");
    fs.appendFileSync(textFile, "2NF  " + tfTOYN(nf2)+ "\n");
    fs.appendFileSync(textFile, "3NF  " + tfTOYN(nf3)+ "\n");
    fs.appendFileSync(textFile, "BCNF  " + tfTOYN(bcnf)+ "\n\n");
}

function tfTOYN(thing) {
    if(thing){
        return 'Y';
    }
    else{
        return 'N';
    }
}

function checking(table, pks, cols) {
    if(table === "" || pks === "" || cols === ""){
        fs.appendFileSync(textFile, table,": Invalid Input\n\n")
        client.end();
        console.log("Connection Closed")
        return process.exit(1);
    }
    if(pks.length > 2){
        fs.appendFileSync(textFile, table + ": Invalid Input\n\n")
        client.end();
        console.log("Connection Closed")
        return process.exit(1);
        
    }
    
    //change const name and return true if no errors

}

function validPK(table, pk) {
    //num of total rows - number of distinct combos of pks
    //will return 0 if valid
    //for multiple pks, do i need to pk differently?
        return `SELECT (SELECT DISTINCT COUNT(*) 
            FROM (SELECT COUNT(*) 
                FROM ${table} 
                ) AS set1)
        - (SELECT COUNT (*) 
            FROM (SELECT DISTINCT COUNT(${pk})
            FROM ${table}) AS temp) 
            AS count;`
}

function query1NF(table, pks, columns) {
    //compares distinct pks with distinct groups of pks and cols
    //will return 0 if in 1nf
    //again is passing pks and cols like this fine?
    return `SELECT ${pks},${columns},COUNT(*)
            FROM ${table}
            GROUP BY ${pks},${columns} 
            HAVING COUNT(*)>1;`
}

function queryFD(table, col1, col2) {
    //different columns of table to see if theres a fd
    //used to tests 2nf, 3nf, bcnf
    //will reutrn 0 is there is an fd
    return `SELECT (SELECT COUNT(*)
            FROM (SELECT DISTINCT(${col1})
                FROM ${table}) AS set1)
            - (SELECT COUNT (*)
            FROM (SELECT DISTINCT(${col1}, ${col2})
                FROM ${table})AS set2)
            as count;`
}

async function findPKS(table, pks) {
    
    for (const pk in pks) {
        const res = await queryDatabase(validPK(table,pk));
        if (res.rows[0].count == 0) {
            return true;
        }
    }
    return false;
}

async function find1NF(table, pks, cols) {
    const res = await queryDatabase(query1NF(table,pks,cols));
    if (res.rowCount == 0) {
        return true;
    }
    return false;
}

async function find2NF(table, pks, cols) {
    for(const pk of pks){
        for (const col of cols){
            const res = await queryDatabase(queryFD(table, pk, col));
            if (res.rows[0].count == 0) {
                return false;
            }     
        }
    }
    return true;
}

async function find3NF(table, cols1, cols2) {
    var i=0;
    for(const col1 of cols1){
        var j=0;
        for (const col2 of cols2){
            if(i == j) {
                //this will skip wasting a query on comparing a column to itself
                continue;
            }
            const res = await queryDatabase(queryFD(table, col1, col2));
            if (res.rows[0].count == 0) {
                return false;
            }     
            j+=1;    
        }
        i+=1;
    }
    return true;
}

async function queryDatabase(query) {
    fs.appendFileSync(sqlFile, query + "\n\n")
    const res = await client.query(query);
    return res;
}

async function execute() {
    await client.connect();
        console.log("Connected to server.")
    try {
        const [ table, pks, columns ] = getArguments();
        
        

        valid = nf1 = nf2 = nf3 = bcnf = false;
        checking(table, pks, columns)
        
        valid = await findPKS(table, pks)
        nf1 = await find1NF(table, pks, columns)
        //skip 2nf checking if pk not composite
        if (nf1 && pks.length == 1) {
            nf2 = true;
        }
        if (nf1) {
            if (!nf2) {
                nf2 = await find2NF(table,pks,columns) 
            }
        }
        if (nf2) {
            nf3 = await find3NF(table,columns,columns)
        }
        if (nf3) {
            bcnf = await find2NF(table, columns, pks)
        }

        console.log(valid, nf1, nf2, nf3, bcnf)
        fileWrite(valid, nf1, nf2, nf3, bcnf, table);


    } catch(err) {
        console.error(err);
    } finally {
        await client.end();
        console.log("Connection closed.")
    }
}

execute();
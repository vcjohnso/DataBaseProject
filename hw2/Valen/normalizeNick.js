const { Client } = require('pg');
const fs = require('fs');
const filename = 'nf.txt';
const creds = require('./creds.json');
//const { promisify } = require('util');
//const { POINT_CONVERSION_UNCOMPRESSED } = require('constants');
const client = new Client({
	host     : creds.host,
	user     : creds.user,
	password : creds.password,
	port     : creds.port,
	database : creds.database
});
let passing = false;
let validKey = false;

function getArg2 (){
	var paramstr = process.argv[2]; //maybe create a function that gets rid of spaces between this and next line
	var paramswithequals = paramstr.split(';');
	var params = [];
	for (var i = 0; i < paramswithequals.length; i++) {
		params[i] = paramswithequals[i].split('=');
	}
	var tablet;
	var nessmoves;
	var nonPrime;
	for (var i = 0; i < params.length; i++) {
		if ('table' == params[i][0]) tablet = params[i][1];
		if ('pk' == params[i][0]) nessmoves = params[i][1].split(',');
		if ('columns' == params[i][0]) nonPrime = params[i][1].split(',');
	}
	// var allcols = nessmoves.concat(nonPrime)
	// allcols = new Set(allcols)
	// allcols = Array.from(allcols)
	//console.log(tablet)
	return [ tablet, nessmoves, nonPrime ];
}

function writeFile (str, bool){
	if (bool == true)
		fs.appendFile(filename, str + '\t' + 'Y' + '\n', (error) => {
			console.log(str + ' Outputted');
		});
	else
		fs.appendFile(filename, str + '\t' + 'N' + '\n', (error) => {
			console.log(str + ' Outputted');
		});
}

async function validPK (table, primaryKey){
	if (primaryKey.length == 1) {
		q = await client.query(`SELECT ${primaryKey}, COUNT(*) FROM ${table} GROUP BY ${primaryKey};`);
		r = await client.query(`SELECT DISTINCT COUNT(${primaryKey}) FROM ${table};`);
		if (r.rows[0].count != q.rowCount) {
			validKey = false;
			return false;
		}
	}
	else if (primaryKey.length == 2) {
		//must loop between the keys to check for invalid key
		for (let i = 0; i < primaryKey.length; i++) {
			q = await client.query(`SELECT ${primaryKey}, COUNT(*) FROM ${table} GROUP BY ${primaryKey};`);
			r = await client.query(`SELECT DISTINCT COUNT(${primaryKey[i]}) FROM ${table};`);
			if (r.rows[0].count != q.rowCount) {
				validKey = false;
				return false;
			}
		}
	}
	validKey = true;
	return true;
}

async function oneNF (table, primaryKey, columns){
	q = await client.query(
		`select ${primaryKey},${columns},count(*) from ${table} group by ${primaryKey},${columns} having count(*)>1;`
	);
	if (q.rowCount != 0) {
		passing = false;
		return false;
	}
	else {
		passing = true;
		return true;
	}
}

async function twoNF (table, primaryKey, columns, bool){
	if (primaryKey.length == 2) {
		//loop through each key and then keys otgether
	}
	else {
		for (let i = 0; i < columns.length; i++) {
			q = await client.query(
				`select ${primaryKey}, count(${columns[i]}) from ${table} group by ${primaryKey} having count(${columns[
					i
				]})>1`
			);
			if (q.rowCount != 0) {
				passing = false;
				return false;
			}
		}
		passing = true;
		return true;
	}

	//Do we want PD NOT want
	//if(primaryKey.length==2){
	//console.log('2 keys \n');
	for (let i = 0; i < primaryKey.length; i++) {
		for (let j = 0; j < columns.length; j++) {
			q = await client.query(
				`SELECT ${primaryKey[i]}, COUNT(DISTINCT ${columns[j]}) FROM ${table} GROUP BY ${primaryKey[
					i
				]} HAVING COUNT(DISTINCT ${columns[j]}) >1`
			);
			if (q.rowCount != 0) {
				passing = false;
				return false;
			}
		}
	}
	passing = true;
	return true;
	//writeFile("2NF",passing)

	//else
	//console.log("1 key\n")
	//if(bool==false || validKey==false)
	//writeFile("2NF", false);
	//else{
	//writeFile("2NF", passing)
}

async function threeNF (table, primaryKey, columns, bool){
	if (bool == false) return false;
	else {
		if (primaryKey.length == 2) {
			for (let j = 0; j < columns.length; j++) {
				q = await client.query(
					`SELECT ${primaryKey},COUNT(DISTINCT ${columns[
						j
					]}) from ${table} GROUP BY ${primaryKey} HAVING COUNT(DISTINCT ${columns[j]})>1;`
				);
				r = await client.query(
					`SELECT ${columns[j]},COUNT(DISTINCT ${primaryKey[0]}) from ${table} GROUP BY ${columns[
						j
					]} HAVING COUNT(DISTINCT ${primaryKey[0]})>1;`
				);
				s = await client.query(
					`SELECT ${columns[j]},COUNT(DISTINCT ${primaryKey[1]}) from ${table} GROUP BY ${columns[
						j
					]} HAVING COUNT(DISTINCT ${primaryKey[1]})>1;`
				);
				if (r.rowCount <= s.rowCount) {
					lowest = r.rowCount;
				}
				else lowest = s.rowCount;
				if (q.rowCount != lowest) {
					passing = false;
					return false;
				}
				else {
					passing = true;
					return true;
				}
			}
		}
		else {
			for (let i = 0; i < columns.length; i++) {
				console.log(columns[i]);
				q = await client.query(
					`SELECT ${primaryKey}, COUNT(distinct ${columns[
						i
					]}) FROM ${table} GROUP BY ${primaryKey} HAVING COUNT(DISTINCT ${columns[i]})>1;`
				);
				r = await client.query(
					`SELECT ${columns[i]}, COUNT(distinct ${primaryKey}) FROM ${table} GROUP BY ${columns[
						i
					]} HAVING COUNT(DISTINCT ${primaryKey})>1;`
				);
				if (q.rowCount != r.rowCount) {
					passing = false;
					return false;
				}
				else {
					passint = true;
					return true;
				}
				console.log('q: ' + q.rowCount);
				console.log('r: ' + r.rowCount);
			}
			//return true;
		}
	}
	//if (bool == false || validKey == false) //writeFile('3NF', false);
	//else {
	//writeFile('3NF', passing);
	//}
}

async function BCNF (table, primaryKey, columns, bool){
	if (bool == false) return false;
	else {
		return true;
	}
	//if (bool == false || validKey == false) //writeFile('BCNF', false);
	//else {
	//writeFile('BCNF', passing);
	//}
}

async function main (){
	client.connect();
	try {
		//get parameters from file call
		[ table, primaryKey, columns ] = getArg2();
		//This clears the file from all previous info left over
		fs.writeFile(filename, '', function (){
			console.log('File erased');
		});

		writeFile('PK', await validPK(table, primaryKey)); //Determines if PK is valid or not and output to the file
		writeFile('1NF', await oneNF(table, primaryKey, columns)); //Determines if 1NF is valid and outputs to file
		writeFile('2NF', await twoNF(table, primaryKey, columns, passing));
		writeFile('3NF', await threeNF(table, primaryKey, columns, passing));
		writeFile('BCNF', await BCNF(table, primaryKey, columns, passing));
		//console.log(q.rows[0].count);
	} catch (e) {
		console.error(e);
	} finally {
		await client.end();
		console.log('Connection closed.');
	}
	client.end();
}
main();

/*
it requires pf in local folder for now
install it:
npm install pg
*/
const { Pool} = require('pg')
const creds = require('./creds.json')

//Change info in creds.json
const pool = new Pool({
  host: creds.host,
  user: creds.user,
  password: creds.password,
  port: creds.port,
  database: creds.database
});

pool.query('SELECT * from public.hw2_1nf_2nf_1;', (err, res) => {

  //retrieve first row
//  console.log("1st row: ",res.rows[0])

  //parse through each column
  console.log('tdate:',res.rows[0].tdate,'\n x:',res.rows[0].x,'\n y:',res.rows[0].y,'\n z:',res.rows[0].z)

  //print all rows
  console.log(res.rows)
  console.log('\n')
})

pool.end()
const { Client } = require("pg");
const client = new Client(
  {
    "host": "3380db.cs.uh.edu",
    "user": "dbs050",
    "password": "dbs050",
    "port": "5432",
    "database": "COSC3380"
  }
);

async function execute() {
  await client.connect();
      console.log("Connected to server.")
  try {
  } catch(err) {

    
    console.error(err);
} finally {
    await client.end();
    console.log("Connection closed.")
  }
}

execute();
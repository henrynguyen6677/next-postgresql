// import ServerlessClient from 'serverless-pg'

// const client = new ServerlessClient({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     // port: process.env.DB_PORT
// });
 
// const handler = async(event, context) => {
//     await client.sconnect();
//     const result = await client.query(`SELECT NOW()`);
//     await client.clean();
//     return {
//       body: JSON.stringify({message: result}),
//       statusCode: 200
//     }
// }
 
const http = require('http');
const ServerlessClient = require("../node_modules/serverless-postgres/index.js");

const hostname = '127.0.0.1';
const port = 7000;



let page =  1
const limit = 9

const server = http.createServer(async (req, res) => {
  try {
    const client = new ServerlessClient({
      user: process.env.DB_USER,
      host: "localhost",
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    });

    await client.sconnect();
    const users = await client.query(`
    SELECT *
    FROM users
    ORDER BY id
    
  `);
    console.log("connection ok");
    await client.clean();
    console.log({users})
    res.statusCode = 200;
    res.end()
  } catch (e) {
    console.log(e.message);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


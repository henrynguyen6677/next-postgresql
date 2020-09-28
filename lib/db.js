import ServerlessClient from 'serverless-postgres'

const query = async (query) => {
  try {
    console.log("Begin connection");
    console.log({query})
    const db = new ServerlessClient({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    })
    await db.sconnect();
    const results = await db.query(query)
    results.rows
    await db.end()
    return { rows: results.rows }
  } catch (error) {
    return { error }
  }
}

export { query }
import db from '../../../lib/db'
import escape from 'sql-template-strings'

module.exports = async (req, res) => {
  const [user] = await db.query(escape`
    SELECT *
    FROM users
    WHERE id = ${req.query.id}
  `)
  res.status(200).json({ user })
}

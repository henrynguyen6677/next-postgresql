import * as db from '../../../lib/db'
import escape from 'sql-template-strings'

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 9
  if (page < 1) page = 1

  const users = await db.query(`
      SELECT *
      FROM users
      ORDER BY id
      LIMIT ${limit}
      OFFSET ${(page - 1) * limit}
    `)
  const count = await db.query(`
      SELECT COUNT(*)
      AS usersCount
      FROM users
    `)
  const { usersCount } = count
  const pageCount = Math.ceil(usersCount / limit)
  res.status(200).json({ users, pageCount, page })
}

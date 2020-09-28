import Link from 'next/link'

function HomePage({ users, page, pageCount }) {
  console.log(users)
  return (
    <>
      <ul>
        {users.map((p) => (
          <li className="user" key={p.id}>
            <Link href={`/user?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>Name: {p.username}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {page > 1 && (
          <Link href={`/?page=${page - 1}&limit=9`}>
            <a>Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
    </>
  )
}

export async function getServerSideProps({ req, query }) {
  console.log('[getServerSideProps]')
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const host = req.headers['x-forwarded-host'] || '127.0.0.1'
  const port = 3000
  const page = query.page || 1
  const limit = query.limit || 3

  const res = await fetch(
    `${protocol}://${host}:${port}/api/users?page=${page}&limit=${limit}`
  )
  const data = await res.json()
  return { props: data }
}

export default HomePage

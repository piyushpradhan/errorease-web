import { Link } from 'react-router-dom'
import { BACKEND_URL } from 'src/lib/env'

export default function Home() {
  return (
    <main>
      <Link to={`${BACKEND_URL}/api/auth/github`} title="Sign in with GitHub">
        Sign in with GitHub
      </Link>
    </main>
  )
}

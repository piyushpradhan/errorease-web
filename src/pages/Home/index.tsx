import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Link to="http://localhost:3000/api/auth/github" title="Sign in with GitHub">
        Sign in with GitHub
      </Link>
    </main>
  )
}

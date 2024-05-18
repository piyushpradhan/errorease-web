import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { loginWithGithub } from 'src/api/user'
import { Button } from 'src/components/ui/button'

export default function Home() {
  const navigate = useNavigate()
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: loginWithGithub,
    onSuccess: () => {
      navigate('/dashboard')
    },
  })

  const handleGithubLogin = () => {
    loginMutation.mutate()
  }

  return (
    <main>
      <Button onClick={handleGithubLogin}>Sign in with GitHub</Button>
    </main>
  )
}

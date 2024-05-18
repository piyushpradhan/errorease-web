import { BACKEND_URL } from 'src/lib/env'

export const loginWithGithub = () => {
  return fetch(`${BACKEND_URL}/api/auth/github`)
}

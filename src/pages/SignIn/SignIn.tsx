import { Github } from 'lucide-react'
import { Button } from 'src/components/ui/button'

import logo80Png from '../../assets/icons/logo-80.png'

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="pattern-dots fixed left-0 top-0 -z-10 h-screen w-screen pattern-bg-white pattern-gray-300 pattern-opacity-20 pattern-size-6" />

      <div className="container flex flex-col items-center justify-center gap-12">
        <img src={logo80Png} alt="ErrorEase" className="w-10/12 max-w-96 invert" />

        <div className="flex w-10/12 max-w-96 flex-col items-center gap-6 rounded-lg border bg-muted px-4 py-8 shadow sm:border-x sm:px-10">
          <p>Sign in using</p>

          <Button className="w-full gap-1 text-lg" variant="outline" size="lg">
            <Github className="h-5 w-5" />
            GitHub
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </main>
  )
}

import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export default function Logout() {
  return (
    <Dialog>
      <DialogTrigger className="h-auto px-3 py-1 text-sm font-medium text-destructive underline-offset-4 hover:underline">
        Log out
      </DialogTrigger>

      <DialogContent className="w-11/12 rounded-lg sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-left">Logout</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          You are about to log out. You will need to sign in again to track your issues. Are you sure?
        </DialogDescription>

        <DialogFooter className="!flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground md:w-auto"
            >
              Log out
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button type="button" className="w-full md:w-auto">
              Stay
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

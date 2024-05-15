import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export default function Settings() {
  return (
    <Dialog>
      <DialogTrigger className="h-auto px-3 py-1 text-sm font-medium underline-offset-4 hover:underline">
        Settings
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

// TODO @thesudeshdas => Work on the settings modal content

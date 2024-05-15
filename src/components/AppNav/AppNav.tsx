import { Menu } from 'lucide-react'

import Sidebar from '../Sidebar/Sidebar'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'

export default function AppNav() {
  return (
    <div className="sticky top-0 z-20 flex h-12 items-center border-b bg-background p-3 lg:hidden">
      <Sheet>
        <SheetTrigger asChild autoFocus={false}>
          <Menu className="h-5 w-5 cursor-pointer" />
        </SheetTrigger>

        <SheetContent noCloseIcon side="left" className="flex flex-col bg-zinc-50 p-0 dark:bg-zinc-900">
          <SheetClose id="errorease-sidebar" className="hidden" />

          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  )
}

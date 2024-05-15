import { List, LockOpen, MessageCircleX } from 'lucide-react'
import { ISidebarNavItem } from 'src/types/sidebar.types'

export const sidebarLinks: ISidebarNavItem[] = [
  { id: crypto.randomUUID(), label: 'All', icon: List },
  { id: crypto.randomUUID(), label: 'Open', icon: LockOpen },
  { id: crypto.randomUUID(), label: 'Closed', icon: MessageCircleX },
]

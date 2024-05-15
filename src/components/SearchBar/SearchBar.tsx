import { Search } from 'lucide-react'

import { Input } from '../ui/input'

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8" />
    </div>
  )
}

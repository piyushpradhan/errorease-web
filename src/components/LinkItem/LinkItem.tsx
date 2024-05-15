import { X } from 'lucide-react'

import { Card, CardDescription } from '../ui/card'

interface ILinkItem {
  id: string
  url: string
  onClose: (id: string) => void
}

export default function LinkItem({ id, onClose, url }: ILinkItem) {
  return (
    <li>
      <Card className="group relative flex w-full min-w-72 cursor-pointer transition-colors hover:border-foreground">
        <CardDescription className="line-clamp-1 w-[calc(100%-32px)] p-2 transition-colors group-hover:text-foreground">
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </CardDescription>

        <X
          className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground transition-colors hover:text-destructive"
          onClick={() => onClose(id)}
        />
      </Card>
    </li>
  )
}

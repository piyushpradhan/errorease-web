import { Badge } from '../ui/badge'

interface ILabelPill {
  name: string
}

export default function LabelPill({ name }: ILabelPill) {
  return (
    <Badge
      variant="outline"
      className="cursor-pointer border  border-primary bg-background hover:bg-primary hover:text-primary-foreground"
    >
      {name}
    </Badge>
  )
}

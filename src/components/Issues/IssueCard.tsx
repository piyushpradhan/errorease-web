import { useNavigate } from 'react-router-dom'
import { Issue } from 'src/types/issue.types'

import { Badge } from '../ui/badge'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'

interface IIssueCardProps {
  issue: Issue
}

export default function IssueCard({ issue }: IIssueCardProps) {
  const navigate = useNavigate()

  const updatedAt = new Date(issue.updated_at)

  const handleCardClick = () => {
    navigate(`/issue/${issue.id}`)
  }

  return (
    <Card
      onClick={handleCardClick}
      className="flex aspect-4/3 w-full min-w-64 cursor-pointer flex-col justify-between transition-transform hover:scale-[0.98]"
    >
      <CardHeader>
        <CardTitle className="line-clamp-3 leading-tight">
          #{issue.seqNo} =&gt; {issue.title}
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex items-end justify-between gap-4">
        {issue.labels && issue.labels?.length > 0 && (
          <div className="flex flex-shrink flex-wrap-reverse gap-1">
            {issue.labels?.map((label) => (
              <Badge
                key={label.name}
                variant="outline"
                className="cursor-pointer border  border-primary bg-background hover:bg-primary hover:text-primary-foreground"
              >
                {label.name}
              </Badge>
            ))}
          </div>
        )}

        <p className="flex-shrink-0 text-xs text-muted-foreground">Updated {updatedAt.toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  )
}

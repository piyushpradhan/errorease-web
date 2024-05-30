/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Issue } from 'src/types/issue.types'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Separator } from '../ui/separator'

import IssueCard from './IssueCard'
import NoIssuesFound from './NoIssuesFound'

export default function IssuesView() {
  const currentView = 'Closed'

  // const { isLoading, isSuccess, data } = api.user.getCurrentUserData.useQuery()

  const [issuesView] = useState<{
    openIssues: Issue[]
    closedIssues: Issue[]
  }>()

  // useEffect(() => {
  //   // Update store with user's issues and labels
  //   if (!isLoading && isSuccess) {
  //     const userData = data
  //     const labels: Label[] = userData?.labels || []
  //     const issues: Issue[] = userData?.issues || []

  //     store.user?.loginUser(userData as User)

  //     if (issues && labels) {
  //       store.label?.updateLabels(labels)
  //       store.issue?.updateIssues(issues)
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading])

  // for handling the view the user selects from the sidebar
  // useEffect(() => {
  //   const allIssues = store.issue?.getAllIssues() ?? []
  //   let openIssues = [] as Issue[]
  //   let closedIssues = [] as Issue[]

  //   if (currentView === 'All') {
  //     openIssues = allIssues.filter((issue) => issue.status === 'Open')
  //     closedIssues = allIssues.filter((issue) => issue.status === 'Closed')
  //   } else if (currentView === 'Open') {
  //     openIssues = allIssues.filter((issue) => issue.status === 'Open')
  //   } else if (currentView === 'Closed') {
  //     closedIssues = allIssues.filter((issue) => issue.status === 'Closed')
  //   } else {
  //     openIssues = allIssues.filter((issue) => issue.labels?.some((item) => item.name === currentView))
  //   }

  //   setIssuesView({ openIssues, closedIssues })
  // }, [currentView, store.issue])

  return (
    <>
      {issuesView?.openIssues && issuesView?.openIssues?.length > 0 && (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(256px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(288px,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {issuesView?.openIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}

      {issuesView?.closedIssues && issuesView?.closedIssues?.length > 0 && (
        <Accordion type="single" collapsible defaultValue={currentView === 'Closed' ? 'item-1' : ''}>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="flex gap-4 hover:no-underline">
              <div className="flex w-full items-center gap-4">
                <p className="font-semibold text-muted-foreground">Closed</p>

                <Separator className="flex-1 bg-muted-foreground" />
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col items-start gap-2 pt-2">
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(256px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(288px,1fr))] 2xl:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {issuesView?.closedIssues.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {issuesView?.closedIssues &&
        issuesView?.closedIssues?.length === 0 &&
        issuesView?.openIssues &&
        issuesView?.openIssues?.length === 0 && (
          <NoIssuesFound title="No issues found" message="Looks like there are no closed issues" />
        )}
    </>
  )
}

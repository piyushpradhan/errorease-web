/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Ban, Save, Share2, SquareCheckBig, Trash } from 'lucide-react'
import ActionButton from 'src/components/ActionButton/ActionButton'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from 'src/components/ui/resizable'
import { Separator } from 'src/components/ui/separator'
import { Textarea } from 'src/components/ui/textarea'
import { Link } from 'src/types/link.types'

export default function Issue() {
  const { issueId } = useParams()

  // const resolveIssueMutation = api.issue.resolve.useMutation({
  //   onMutate: () => {
  //     // Update the issue in store
  //     store.issue?.updateStatus(id, 'Closed')
  //     router.replace('/app/home')
  //   },
  //   onSuccess: () => {},
  //   onError: () => {
  //     // Revert back the status change
  //     store.issue?.updateStatus(id, 'Open')
  //     router.push(`/app/issue/${id}`)
  //   },
  // })

  // const saveIssueMutation = api.issue.edit.useMutation({
  //   onSuccess: (data) => {
  //     // Update the issue in store;
  //     if (data) {
  //       store.issue?.updateIssue(data)
  //       // TODO: Add logic to update labels in store
  //     }
  //   },
  // })

  // const issueStore = useStore().issue
  // const issueData = issueStore?.getIssue(id)

  const [isChanged, setIsChanged] = useState<boolean>(false)

  const [link, setLink] = useState<string>('')
  const [links, setLinks] = useState<Array<Omit<Link, 'issue'>>>([])

  const [description, setDescription] = useState<string>('')

  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }

  const handleAddLink = () => {
    setLinks((prev) => [
      ...prev,
      {
        id: `temp-${prev.length}`,
        url: link,
      },
    ])
    setLink('')
  }

  const removeLink = (linkId: string) => {
    setLinks((prev) => {
      const updatedLinks = prev.filter((prevLink) => prevLink.id !== linkId)
      return updatedLinks
    })
  }

  const resolveIssue = () => {
    // resolveIssueMutation.mutate({ id })
  }

  const saveIssue = () => {
    // const storedLinks = (issueData?.links || []).map((stored) => stored.url)
    // const updatedLinks = links.map((updated) => updated.url)
    // const newLinks = storedLinks.length > 0 ? R.intersection(storedLinks, updatedLinks) : updatedLinks
    // saveIssueMutation.mutate({ id, links: newLinks })
  }

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // useEffect(() => {
  //   const hasLinksChanged = compareLinks(
  //     links.map((l) => l.url),
  //     issueData?.links || [],
  //   )
  //   const hasDescriptionChanged = compareDescription(description, issueData?.description ?? '')

  //   if (hasDescriptionChanged || hasLinksChanged) {
  //     setIsChanged(true)
  //   } else {
  //     setIsChanged(false)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [description, links])

  // TODO: Create a proper Not Found Boundary component
  //   if (issueData === undefined) return <NotFoundBoundary>NOT FOUND</NotFoundBoundary>

  return (
    <main className="flex flex-grow flex-col">
      <div className="sticky left-0 top-0 flex w-full items-start justify-between gap-2 border-b-2 border-foreground p-4 lg:h-32">
        <div>
          <h3 className="text-xl font-semibold lg:text-2xl">
            {/*   {issueData.seqNo} =&gt; {issueData.title}  */}
            and a long text after that
          </h3>

          <div className="mt-4 flex gap-2">
            {/* {issueData.labels?.map((label) => (
              <Label key={label.id} name={label.name} />
            ))} */}
          </div>
        </div>

        {isChanged ? (
          <div className="relative -top-1 flex items-center gap-1 lg:gap-2">
            <Button size="sm" className="gap-2 transition-all hover:scale-95" onClick={saveIssue}>
              <Save className="h-4 w-4 lg:h-5 lg:w-5 " />
              <p className="hidden md:block">Save</p>
            </Button>

            <Button variant="outline" size="sm" className="gap-2 transition-all hover:scale-95 hover:bg-inherit">
              <Ban className="h-4 w-4 lg:h-5 lg:w-5 " />
              <p className="hidden md:block">Discard</p>
            </Button>
          </div>
        ) : (
          <div className="relative -top-1 flex items-center lg:gap-1">
            <ActionButton
              onClick={resolveIssue}
              label="Close Issue"
              icon={<SquareCheckBig className="h-4 w-4 lg:h-5 lg:w-5 " />}
            />
            <ActionButton onClick={() => {}} label="Share" icon={<Share2 className="h-4  w-4 lg:h-5 lg:w-5 " />} />
            <ActionButton onClick={() => {}} label="Delete" icon={<Trash className="h-4  w-4 lg:h-5 lg:w-5 " />} />
          </div>
        )}
      </div>

      <ResizablePanelGroup direction={viewportWidth > 1024 ? 'horizontal' : 'vertical'}>
        <ResizablePanel
          defaultSize={viewportWidth > 1024 ? 50 : 75}
          className="!overflow-auto lg:h-[calc(100vh-130px)]"
        >
          <div className="flex h-[150vh] flex-col gap-4 overflow-auto p-4 ">
            <section>
              <h4 className="text-lg font-semibold lg:text-xl">Resource Links</h4>

              <ul className="mt-4 flex flex-col gap-2">
                {/* {links.map((issueLink) => (
                  <LinkItem key={issueLink.id} link={issueLink} handleClose={removeLink} />
                ))} */}

                <li className="flex gap-2">
                  <Input placeholder="Add a new link here" value={link} onChange={handleInputChange} />

                  <Button onClick={handleAddLink} disabled={link?.trim()?.length === 0} className="transition-opacity">
                    Add Link
                  </Button>
                </li>
              </ul>
            </section>

            <Separator className="my-4 bg-muted-foreground" />

            <section className="flex flex-grow flex-col gap-4">
              <h4 className="text-lg font-semibold lg:text-xl">Documentation</h4>

              <Textarea
                value={description}
                onChange={(e: any) => {
                  setDescription(e.target.value)
                }}
                placeholder="Save your thoughts here"
                className="flex-grow"
              />
            </section>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle className="bg-muted-foreground" />

        <ResizablePanel defaultSize={viewportWidth > 1024 ? 50 : 25}>
          <div className="flex h-[calc(100vh-130px)] items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}

//

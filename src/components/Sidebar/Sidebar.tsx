/* eslint-disable no-console */
'use client'

import { useLocation, useNavigate } from 'react-router-dom'
import { Tags } from 'lucide-react'
import { getInitials } from 'src/utils/name'

import Logout from '../Logout/Logout'
import Settings from '../Settings/Settings'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

import { sidebarLinks } from './sidebar.data'

export default function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // TODO => Get the following from the server

  const displayName = 'Sudesh Das'
  const currentView = 'All'
  const updateView = (filterName: string) => console.log('function to update the view')
  const labels: any[] = []

  console.log({ pathname })

  const handleSidebarFilter = (filterName: string) => {
    if (updateView) {
      updateView(filterName)
      document.getElementById('errorease-sidebar')?.click()

      if (pathname !== 'dashboard') navigate('/dashboard')
    }
  }

  return (
    <div className="sticky left-0 top-0 flex flex-shrink-0 flex-grow flex-col overflow-hidden border-foreground p-2 lg:h-screen lg:w-52 lg:border-r">
      <h2 className="p-4 text-xl font-semibold">ErroREase</h2>

      <Separator className="bg-muted-foreground" />

      <div className="my-2">
        {sidebarLinks?.map((link) => (
          <Button
            key={link.id}
            variant={currentView === link.label ? 'default' : 'ghost'}
            size="sm"
            className="w-full justify-start gap-2"
            onClick={() => handleSidebarFilter(link.label)}
          >
            <link.icon className="h-4 w-4" />

            {link.label}
          </Button>
        ))}

        {labels && labels?.length > 0 && (
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex h-9 justify-start gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent  hover:text-accent-foreground hover:no-underline">
                <Tags className="h-4 w-4" />

                <p className="mr-auto">Labels</p>
              </AccordionTrigger>

              <AccordionContent className="flex h-[calc(100vh-420px)] flex-shrink flex-col items-start  gap-2 overflow-auto pl-8 pt-2">
                {labels?.map((label) => (
                  <Badge
                    key={label.id}
                    variant={currentView === label.name ? 'default' : 'outline'}
                    className={`cursor-pointer border border-primary  ${
                      currentView === label.name ? '' : ' bg-background hover:bg-primary hover:text-primary-foreground'
                    }  `}
                    onClick={() => handleSidebarFilter(label.name)}
                  >
                    {label.name}
                  </Badge>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>

      <div className="w-full flex-grow" />

      <div className="pb-2">
        {/* {isSuccess && data && ( */}
        <div className="mb-2 flex cursor-pointer items-center gap-3 overflow-hidden rounded-md px-3 py-4">
          <Avatar className="flex h-9 w-9">
            <AvatarImage src="https://picsum.photos/200" alt="Avatar" />
            <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-sm font-medium leading-none">{displayName}</p>
          </div>
        </div>
        {/* )} */}

        <Separator className="my-2 bg-muted-foreground" />

        <div className="flex flex-col items-start">
          <Settings />

          <Button variant="link" size="sm" className="h-auto px-3 py-1">
            Help
          </Button>

          <Logout />
        </div>
      </div>
    </div>
  )
}

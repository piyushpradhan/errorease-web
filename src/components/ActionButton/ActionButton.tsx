'use client'

import React from 'react'

import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

interface IActionButton {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

function ActionButton({ label, icon, onClick }: IActionButton) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            onClick={onClick}
            variant="ghost"
            size="icon"
            className="transition-all hover:scale-95 hover:text-blue-600 hover:bg-blue-600/5"
          >
            {icon}
          </Button>
        </TooltipTrigger>

        <TooltipContent side="bottom">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActionButton

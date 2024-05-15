/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { FieldArrayWithId, UseFieldArrayRemove } from 'react-hook-form'
import { Check, ChevronsUpDown, Info } from 'lucide-react'
import { cn } from 'src/lib/utils'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

interface ILabelsInputProps {
  fields: FieldArrayWithId<{ title: string; labels: { name: string }[] }, 'labels', 'id'>[]
  append: any
  removeLabel: UseFieldArrayRemove
}

export default function LabelsInput({ fields, append, removeLabel }: ILabelsInputProps) {
  const labels: any[] = []

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleAddLabel = (labelValue: string) => {
    append({ name: labelValue })
  }

  const handleRemoveLabel = (labelValue: string) => {
    const findLabelIndex = fields?.findIndex((item) => item.name === labelValue)

    if (findLabelIndex > -1) {
      removeLabel(findLabelIndex)
    }
  }

  const handleCreateLabel = (labelValue: string) => {
    append({ name: labelValue })
    // store.label?.addLabel(labelValue)
    // Clear the input after a label has been added
    setValue('')
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`flex max-h-0 flex-shrink flex-wrap gap-1 ${fields?.length > 0 ? 'max-h-12' : ''} transition-all `}
      >
        {fields?.map((label) => (
          <Badge
            key={label.id}
            variant="outline"
            className="cursor-pointer border  border-primary bg-background hover:bg-primary hover:text-primary-foreground"
            onClick={() => {
              handleRemoveLabel(label.name)
            }}
          >
            {label.name}
          </Badge>
        ))}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex w-full gap-2">
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[300px] justify-between">
              Select labels
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger
                onClick={(event) => {
                  event.preventDefault()
                }}
              >
                <Info className="h-5 w-5" />
              </TooltipTrigger>

              <TooltipContent
                onPointerDownOutside={(event) => {
                  event.preventDefault()
                }}
              >
                <p>Labels can not have spaces</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput
              placeholder="Search labels..."
              value={value}
              onValueChange={(searchValue) => setValue(searchValue?.trim())}
            />

            <CommandEmpty>
              <Button
                variant="default"
                className="mx-auto line-clamp-none h-max w-[90%]"
                onClick={() => handleCreateLabel(value)}
              >
                Create {`"${value}"`}
              </Button>
            </CommandEmpty>

            <CommandList>
              <CommandGroup>
                {labels?.map((label) => (
                  <CommandItem
                    key={label.id}
                    value={label.name}
                    onSelect={
                      !fields.some((item) => item.name === label.name)
                        ? () => handleAddLabel(label.name)
                        : () => handleRemoveLabel(label.name)
                    }
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        fields.some((item) => item.name === label.name) ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {label.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

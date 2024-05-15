/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import LabelsInput from '../LabelsInput/LabelsInput'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

import { FormSchema } from './createIssue.schema'

export default function CreateIssue() {
  // const createIssue = api.issue.create.useMutation({
  //   onSuccess: (data) => {
  //     const createdIssue = data
  //     if (createdIssue) {
  //       store.issue?.addIssue(createdIssue)
  //       // Update the user data with the updated list of issues
  //       store.user?.updateUserData(createdIssue)
  //       // Set the updated label data in store
  //       store.label?.updateOptimisticallyAddedLabels(createdIssue.labels || [])
  //     }
  //   },
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   onError: (_error) => {
  //     // TODO: Show a toast here
  //   },
  // })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      labels: [],
    },
  })

  const { fields, append, remove } = useFieldArray<z.infer<typeof FormSchema>, 'labels', 'id'>({
    control: form.control,
    name: 'labels',
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // createIssue.mutate({ title: data.title, labels: data.labels })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>

      <DialogContent className="w-11/12 rounded-lg sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New issue</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title here" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <LabelsInput fields={fields} append={append} removeLabel={remove} />
          </form>
        </Form>

        <DialogFooter className="!flex-row justify-end gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full md:w-auto">
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                form.handleSubmit(onSubmit)()
                form.reset()
              }}
              className="w-full md:w-auto"
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { z } from 'zod'

export const FormSchema = z.object({
  title: z.string().min(3, {
    message: 'Title needs to be at least 3 characters',
  }),
  labels: z.array(z.object({ name: z.string() })),
})

export type FormType = z.infer<typeof FormSchema>

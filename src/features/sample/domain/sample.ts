import { z } from 'zod'

export const sampleSchema = z.object({})

export type Sample = z.infer<typeof sampleSchema>

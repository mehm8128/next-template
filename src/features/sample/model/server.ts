import { type InferOutput, number, object, optional, string } from 'valibot'

export const sampleDataSchema = object({
	id: string(),
	name: string(),
	age: number(),
	bio: string()
})
export type SampleData = InferOutput<typeof sampleDataSchema>
export type SampleListData = SampleData[]

export const sampleCreateSeedDataSchema = object({
	name: string(),
	age: number(),
	bio: string()
})
export type SampleCreateSeedData = InferOutput<
	typeof sampleCreateSeedDataSchema
>

export const sampleListQueryDataSchema = object({
	id: optional(string())
})
export type SampleListQueryData = InferOutput<typeof sampleListQueryDataSchema>

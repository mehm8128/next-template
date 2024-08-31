import {
	type InferOutput,
	brand,
	minLength,
	minValue,
	number,
	object,
	pipe,
	safeParse,
	string
} from 'valibot'

export const sampleId = pipe(string(), brand('sampleId'))
export type SampleId = InferOutput<typeof sampleId>
export const parseId = (id: string) => {
	const result = safeParse(sampleId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const sampleSchema = object({
	id: sampleId,
	name: string(),
	age: number(),
	bio: string()
})
export type Sample = InferOutput<typeof sampleSchema>
export type SampleList = Sample[]

export const sampleListQuerySchema = object({
	id: sampleId
})
export type SampleListQuery = InferOutput<typeof sampleListQuerySchema>

export const sampleCreateSeedSchema = object({
	name: pipe(string(), minLength(1)),
	age: pipe(number(), minValue(1)),
	bio: string()
})
export type SampleCreateSeed = InferOutput<typeof sampleCreateSeedSchema>

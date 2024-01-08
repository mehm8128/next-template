import { Id } from '@/lib/type'

export type SampleId = Id<'SampleId'>
export interface Sample {
	id: SampleId
	name: string
	age: number
	bio: string
}

export type SampleList = Sample[]

export interface SampleListQuery {
	id: SampleId
}

export interface SampleCreateSeed {
	name: string
	age: number
	bio: string
}

export interface SampleData {
	id: string
	name: string
	age: number
	bio: string
}

export type SampleListData = SampleData[]

export interface SampleCreateSeedData {
	name: string
	age: number
	bio: string
}
export interface SampleListQueryData {
	id?: string
}

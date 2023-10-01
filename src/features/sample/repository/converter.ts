import {
	Sample,
	SampleData,
	SampleListQuery,
	SampleListQueryData,
	SampleCreateSeed,
	SampleCreateSeedData,
} from '@/features/sample/model/type'

import { parseId } from '@/lib/type'

export const convertSampleListQueryToData = (
	query: SampleListQuery,
): SampleListQueryData => {
	return {
		id: query.id,
	}
}

export const convertSampleFromData = (data: SampleData): Sample => {
	return {
		...data,
		id: parseId(data.id),
	}
}

export const convertSampleCreateSeedToData = (
	seed: SampleCreateSeed,
): SampleCreateSeedData => {
	return {
		name: seed.name,
		age: seed.age,
		bio: seed.bio,
	}
}

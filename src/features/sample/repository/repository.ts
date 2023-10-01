import { useMemo } from 'react'

import {
	Sample,
	SampleData,
	SampleList,
	SampleListData,
	SampleListQuery,
	SampleCreateSeed,
} from '@/features/sample/model/type'

import {
	convertSampleFromData,
	convertSampleListQueryToData,
	convertSampleCreateSeedToData,
} from './converter'

export const useSampleRepository = () => {
	return useMemo(() => createSampleRepository(), [])
}

export const createSampleRepository = () => ({
	async fetchSampleList(query: SampleListQuery): Promise<SampleList> {
		const queryData = convertSampleListQueryToData(query)
		const res = await fetch(`/samples/${queryData.id}`)
		const data: SampleListData = await res.json()

		return data.map(convertSampleFromData)
	},
	async postSample(seed: SampleCreateSeed): Promise<Sample> {
		const seedData = convertSampleCreateSeedToData(seed)
		const res = await fetch('/samples', {
			method: 'POST',
			body: JSON.stringify(seedData),
		})
		const data: SampleData = await res.json()

		return convertSampleFromData(data)
	},
})

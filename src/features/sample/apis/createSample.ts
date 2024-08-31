import type { Sample, SampleCreateSeed } from '@/features/sample/model/client'
import type { SampleData } from '@/features/sample/model/server'
import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import {
	convertSampleCreateSeedToData,
	convertSampleFromData
} from '../converter'

export const createSample = async (seed: SampleCreateSeed): Promise<Sample> => {
	const seedData = convertSampleCreateSeedToData(seed)
	const res: SampleData = await fetcher(`${getApiOrigin()}/samples`, {
		method: 'POST',
		body: JSON.stringify(seedData)
	})

	return convertSampleFromData(res)
}

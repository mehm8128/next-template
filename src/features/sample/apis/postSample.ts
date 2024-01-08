import { getApiOrigin } from '@/lib/env'
import { Sample, SampleCreateSeed, SampleData } from '../model/type'
import {
	convertSampleCreateSeedToData,
	convertSampleFromData
} from './converter'

export const postSample = async (seed: SampleCreateSeed): Promise<Sample> => {
	const seedData = convertSampleCreateSeedToData(seed)
	const res = await fetch(`${getApiOrigin()}/samples`, {
		method: 'POST',
		body: JSON.stringify(seedData)
	})
	const data: SampleData = await res.json()

	return convertSampleFromData(data)
}

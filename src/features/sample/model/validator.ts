import { SampleCreateSeed } from '@/features/sample/model/type'

export const sampleSeedValidate = (seed: SampleCreateSeed) => {
	if (!seed.name) return false
	if (!seed.age) return false
	if (seed.age < 0) return false
	if (!seed.bio) return false
	return true
}

import { mockSample } from '@/features/sample/mock/data'
import { SampleCreateSeed } from '@/features/sample/model/type'
import { sampleSeedValidate } from '@/features/sample/model/validator'

describe('validator', () => {
	describe('sampleSeedValidate', () => {
		test('全て正常なときにvalid', () => {
			expect(sampleSeedValidate(mockSample)).toBe(true)
		})
		test('名前がないときにinvalid', () => {
			const sampleSeed: SampleCreateSeed = {
				name: '',
				age: 21,
				bio: 'sample bio'
			}
			expect(sampleSeedValidate(sampleSeed)).toBe(false)
		})
		test('ageが-1のときにinvalid', () => {
			const sampleSeed: SampleCreateSeed = {
				name: 'sample name',
				age: -1,
				bio: 'sample bio'
			}
			expect(sampleSeedValidate(sampleSeed)).toBe(false)
		})
	})
})

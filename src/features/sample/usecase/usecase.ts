import { useMemo } from 'react'

import { SampleListQuery, SampleCreateSeed } from '@/features/sample/model/type'
import { useSampleRepository } from '@/features/sample/repository/repository'

export const useSampleUsecase = () => {
	const repository = useSampleRepository()

	return useMemo(() => createUserUsecase({ repository }), [repository])
}
export const createUserUsecase = ({
	repository,
}: {
	repository: ReturnType<typeof useSampleRepository>
}) => ({
	fetchSampleList: async (query: SampleListQuery) => {
		try {
			const sampleList = await repository.fetchSampleList(query)
			return { sampleList }
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message)
			}
		}
	},
	createSample: async (seed: SampleCreateSeed) => {
		try {
			const sample = await repository.postSample(seed)
			return { sample }
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message)
			}
		}
	},
})

import { SampleListQuery } from '@/features/sample/model/type'
import { useSampleRepository } from '@/features/sample/repository/repository'

import { useSWR } from '@/lib/fetcher'

export const useSampleList = (query: SampleListQuery) => {
	const repository = useSampleRepository()

	return useSWR(['/samples', query.id], () => repository.fetchSampleList(query))
}

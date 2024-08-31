import type {
	SampleList,
	SampleListQuery
} from '@/features/sample/model/client'
import type { SampleListData } from '@/features/sample/model/server'
import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convertSampleFromData } from '../converter'

const fetchSampleList = async (
	query?: Partial<SampleListQuery>
): Promise<SampleList> => {
	const queryParams = new URLSearchParams()
	for (const q in query) {
		const value = query[q as keyof typeof query]
		if (value !== undefined) {
			queryParams.append(q, value)
		}
	}
	const res: SampleListData = await fetcher(`${getApiOrigin()}/api/samples`)

	return res.map(convertSampleFromData)
}

export const useSampleList = (query?: Partial<SampleListQuery>) => {
	return useSuspenseQuery({
		queryKey: ['samples', query],
		queryFn: () => fetchSampleList(query)
	})
}

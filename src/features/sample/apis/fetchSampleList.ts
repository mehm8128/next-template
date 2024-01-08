import {
	SampleList,
	SampleListData,
	SampleListQuery
} from '@/features/sample/model/type'
import { getApiOrigin } from '@/lib/env'
import { convertSampleFromData } from './converter'

import { useSWR } from '@/lib/fetcher'

const fetchSampleList = async (
	query?: Partial<SampleListQuery>
): Promise<SampleList> => {
	const queryData = query
	const queryParams = new URLSearchParams()
	for (const query in queryData) {
		const value = queryData[query as keyof typeof queryData]
		if (value !== undefined) {
			queryParams.append(query, value)
		}
	}
	const res = await fetch(`${getApiOrigin()}/samples?${queryParams}`)
	const data: SampleListData = await res.json()

	return data.map(convertSampleFromData)
}

export const useSampleList = (query?: Partial<SampleListQuery>) => {
	return useSWR(['/samples', query?.id], () => fetchSampleList(query))
}

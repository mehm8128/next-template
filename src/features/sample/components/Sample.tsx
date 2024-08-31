'use client'

import { useSampleList } from '@/features/sample/apis/fetchSampleList'
import { parseId } from '@/features/sample/model/client'

export default function Sample() {
	const { data: sampleList } = useSampleList({ id: parseId('sampleId') })

	return (
		<div>
			{sampleList.map(sample => (
				<div key={sample.id}>{sample.name}</div>
			))}
		</div>
	)
}

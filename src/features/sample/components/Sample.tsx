'use client'

import { useSampleList } from '@/features/sample/usecase/reader'

import { parseId } from '@/lib/type'

export default function Sample() {
	const { data: sampleList } = useSampleList({ id: parseId('sample id') })

	return (
		<div>
			{sampleList.map(sample => (
				<div key={sample.id}>{sample.name}</div>
			))}
		</div>
	)
}

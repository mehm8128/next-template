import { Suspense } from 'react'

import Sample from '@/features/sample/components/Sample'

export default function Home() {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Sample />
			</Suspense>
		</main>
	)
}

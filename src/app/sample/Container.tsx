'use client'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import Sample from '@/features/sample/components/Sample'

export default function Container() {
	return (
		<div>
			aaa
			<ErrorBoundary fallback={<div>Something went wrong</div>}>
				<Sample />
			</ErrorBoundary>
		</div>
	)
}

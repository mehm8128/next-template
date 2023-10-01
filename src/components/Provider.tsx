'use client'

import { SWRConfig } from 'swr'

import { initMock } from '@/lib/mock'

void initMock()

export function Providers({ children }: { children: React.ReactNode }) {
	const swrOptions = {
		suspense: true,
	}

	return <SWRConfig value={swrOptions}>{children}</SWRConfig>
}

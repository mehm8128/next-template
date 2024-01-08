'use client'

import { SWRConfig, unstable_serialize } from 'swr'

import { initMock } from '@/lib/mock'

void initMock()

export function Providers({ children }: { children: React.ReactNode }) {
	const swrOptions = {
		fallback: {
			[unstable_serialize(['/samples', 'sampleId'])]: []
		}
	}

	return <SWRConfig value={swrOptions}>{children}</SWRConfig>
}

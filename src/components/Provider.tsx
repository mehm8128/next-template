'use client'

import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { initMock } from '@/lib/mock'

void initMock()

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<KumaRegistry>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</KumaRegistry>
	)
}

import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'

import { getApiOrigin } from '@/lib/env'

import { handlers } from './handlers'

export const initMock = () => {
	if (process.env.NODE_ENV === 'development') {
		if (typeof window !== 'undefined') {
			const worker = setupWorker(...handlers(getApiOrigin()))
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			worker.start()
		} else {
			const server = setupServer(...handlers(getApiOrigin()))
			server.listen()
		}
	}
}

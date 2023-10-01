import { RestHandler, setupWorker } from 'msw'
import { setupServer } from 'msw/node'

import { sampleHandlers } from '@/features/sample/mock/handlers'

import { getApiOrigin } from '@/lib/env'

export const getHandlersArray = (
	handlers: Record<string, () => RestHandler>,
): RestHandler[] => {
	return Object.values(handlers).map(handler => handler())
}

const handlers = (apiOrigin: string) => {
	return [getHandlersArray(sampleHandlers(apiOrigin))].flat()
}

export const initMock = async () => {
	if (process.env.NODE_ENV === 'development') {
		if (typeof window !== 'undefined') {
			const worker = setupWorker(...handlers(getApiOrigin()))
			await worker.start({
				onUnhandledRequest(req, print) {
					if (req.url.pathname.startsWith('/_next')) {
						return
					}
					print.warning()
				},
			})
		} else {
			const server = setupServer(...handlers(getApiOrigin()))
			server.listen()
		}
	}
}

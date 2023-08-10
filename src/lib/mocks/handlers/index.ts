import { RestHandler } from 'msw'

import { sampleHandlers } from './sample'

export function getHandlersArray(
	handlers: Record<
		string,
		(arg?: Partial<Record<string, unknown>>) => RestHandler
	>,
): RestHandler[] {
	return Object.values(handlers).map(handler => handler())
}

export function handlers(apiOrigin: string) {
	return [getHandlersArray(sampleHandlers(apiOrigin))].flat()
}

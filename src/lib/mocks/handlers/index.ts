import { RestHandler } from 'msw'

import { sampleHandlers } from './sample'

export function getHandlersArray(
	// TODO: 配列とオブジェクトに制限したい
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handlers: Record<string, (arg?: any) => RestHandler>,
): RestHandler[] {
	return Object.values(handlers).map(handler => handler())
}

export function handlers(apiOrigin: string) {
	return [getHandlersArray(sampleHandlers(apiOrigin))].flat()
}

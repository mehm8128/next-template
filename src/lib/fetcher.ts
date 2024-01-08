import _useSWR, { Key } from 'swr'

export const baseFetcher = <T>(url: string): Promise<T> =>
	fetch(url).then<T>(res => res.json())

export const useSWR = <T>(key: Key, fetcher: () => Promise<T>) =>
	_useSWR(key, fetcher, { suspense: true })

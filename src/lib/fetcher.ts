import useSWR2, { Key } from 'swr'

export const baseFetcher = <T>(url: string): Promise<T> =>
	fetch(url).then<T>(res => res.json())

export const useSWR = <T>(key: Key, fetcher: () => Promise<T>) =>
	useSWR2(key, fetcher, {
		suspense: true,
	})

import _useSWR, { Key } from 'swr'

export const fetcher = <T>(url: string, options?: RequestInit): Promise<T> =>
	fetch(url, options).then<T>(res => res.json())

export const useSWR = <T>(key: Key, _fetcher: () => Promise<T>) =>
	_useSWR(key, _fetcher, { suspense: true })

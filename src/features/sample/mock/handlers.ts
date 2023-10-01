import { rest } from 'msw'

import { mockSample, mockSampleList } from '@/features/sample/mock/data'
import { Sample, SampleCreateSeed } from '@/features/sample/model/type'

export const sampleHandlers = (apiOrigin: string) => {
	const fetchSamples = (response?: Partial<Sample>) => {
		const defaultResponses: Sample[] = mockSampleList
		return rest.get(`${apiOrigin}/samples`, (req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json<Sample[]>(
					defaultResponses.map(defaultResponse => ({
						...defaultResponse,
						...response,
					})),
				),
			)
		})
	}

	const postSample = () => {
		return rest.post(`${apiOrigin}/samples`, async (req, res, ctx) => {
			const reqBody: SampleCreateSeed = await req.json()
			return res(
				ctx.status(200),
				ctx.json<Sample>({ ...mockSample, ...reqBody }),
			)
		})
	}

	return { fetchSamples, postSample }
}

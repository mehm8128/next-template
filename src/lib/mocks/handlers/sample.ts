import { rest } from 'msw'

interface Sample {
	sample: string
}

export const sampleHandlers = (apiOrigin: string) => {
	const sample = (response?: Partial<Sample>) => {
		const defaultResponse: Sample = {
			sample: 'sample',
		}
		return rest.get(`${apiOrigin}/sample`, (req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json<Sample>({ ...defaultResponse, ...response }),
			)
		})
	}

	return { sample }
}

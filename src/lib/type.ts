declare const _brand: unique symbol

interface Brand<B> {
	readonly [_brand]: B
}

type Branded<A, B> = A & Brand<B>
export type Id<T extends string> = Branded<string, T>

export const parseId = <T>(id: string): T => id as T

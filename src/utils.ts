/**
 * Always returns an array, either a tuple if the input is a single element, or an array if it is already one.
 *
 * @typeParam T - The type of the element or elements in the input array.
 * @param valueOrValues - Either a primitive or an array.
 * @returns - A tuple if `valueOrValues` is a primitive, an array if it is already an array.
 *
 * @example Transforming a single element
 * ```ts
 * import { parseValueOrValuesAsArray } from <...>
 *
 * parseValueOrValuesAsArray(1) // returns [1];
 * ```
 *
 * @example Transforming an array
 * ```ts
 * import { parseValueOrValuesAsArray } from <...>
 *
 * parseValueOrValuesAsArray([1, 2]) // returns [1, 2];
 * ```
 *
 * @privateremarks
 * There might already exist a public library that does this.
 *
 * @internal
 */
export function parseValueOrValuesAsArray<T>(valueOrValues: T | T[]): T[] {
  return Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];
}

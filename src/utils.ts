/**
 * Always returns an array, either a tuple if the input is a single element, or an array if it is already one.
 *
 * @typeParam T - The type of the element or elements in the input array.
 * @param valueOrValues - Either a primitive or an array.
 * @returns - A tuple if `valueOrValues` is a primitive, an array if it is already an array.
 *
 * @example Transforming a single element
 * ```ts
 * parseValueOrValuesAsArray(1) // returns [1];
 * ```
 *
 * @example Transforming an array
 * ```ts
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

/**
 * Replaces path parameters from an endpoint string and returns it.
 *
 * @param endpoint - The unparsed endpoint.
 * @param pathParams - An object whose keys are path parameter identifiers and values are the values to replace them with.
 * @returns The parsed endpoint, with all path parameters replaced with their values.
 *
 * @throws {@link Error}
 * If there are path parameters in the `endpoint` string whose key-value pair is not present in `pathParams`.
 *
 * @example Replacing a path parameter
 * ```ts
 * parseParameterizedEndpointPath("/window/{gameId}", {
 *  gameId: 1234
 * }) // returns "/window/1234"
 * ```
 *
 * @example Invalid function call
 * ```ts
 * parseParameterizedEndpointPath("/window/{gameId}/{participantId}", {
 *  gameId: 1234
 * }) // throws Error
 * ```
 *
 * @privateremarks
 * There might already exist a public library that does this.
 *
 * @internal
 */
export function parseParameterizedEndpointPath(
  endpoint: string,
  pathParams: Record<string, unknown>
) {
  for (const pathParameterKey in pathParams) {
    endpoint.replaceAll(
      `{${pathParameterKey}}`,
      // Must be stringified because we don't know the type of the value of the path parameter to replace with (could be a number).
      `${pathParams[pathParameterKey]}`
    );
  }

  const unparsedParameters = endpoint.match(/{.+}/gs);

  if (unparsedParameters)
    throw new Error(
      `Missing path parameter values for ${unparsedParameters.join(" ,")}`
    );

  return endpoint;
}

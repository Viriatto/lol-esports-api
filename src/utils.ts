export function parseValueOrValuesAsArray<T>(valueOrValues: T | T[]): T[] {
  return Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];
}

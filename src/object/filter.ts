/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @param {string} this
 * @param {function} predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @returns object
 *
 * @description returns an object filtered based on the filter callback surrounding keys in the original object
 * @example { foo: 'bar', bar: 'foo' }.filterKey(key => key[0] !== 'b') // { foo: 'bar' }
 */
export default function filter<T extends Record<string, any>>(
  this: T,
  predicate: (
    value: [k: keyof T, v: any],
    index: number,
    array: [k: keyof T, v: any][]
  ) => unknown
) {
  const entries = Object.entries(this).filter(predicate);

  const filtered = entries.reduce((obj: Partial<T>, arg: [k: keyof T, v: any]) => {
    // eslint-disable-next-line no-param-reassign
    obj[arg[0]] = this[arg[1]];
    return obj;
  }, {});

  return filtered;
}

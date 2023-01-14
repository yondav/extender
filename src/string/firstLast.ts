/**
 *
 * @method firstLast
 * @param {string} this
 * @returns {array} string

 * @description returns first and last characters of string
 * @example 'foo bar'.firstLast() // ['f', 'r']
 */

export default function firstLast(this: string) {
  const str = this.trim();

  return [str[0], str[str.length - 1]];
}

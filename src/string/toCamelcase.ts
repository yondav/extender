/**
 *
 * @method toCamelcase
 * @param {string} this
 * @returns string

 * @description formats string to camel cased string
 * @example 'foo bar'.toCamelcase() // fooBar
 */

export default function toCamelcase(this: string) {
  return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string, index: number) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

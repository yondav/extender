/**
 * @method toTitleCase
 * @param {string} this
 * @returns string

 * @description formats string to title cased string
 * @example 'foo bar'.toTitleCase() // Foo Bar
 */

export default function toTitlecase(this: string): string {
  return this.toLowerCase()
    .split(/[^a-z|A-Z|0-9]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .trim();
}

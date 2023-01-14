/**
 * @method toSlug 
 * @param {string} this
 * @returns string

 * @description formats string to slug
 * @example 'foo bar'.toSlug() // foo-bar
 */

export default function toSlug(this: string) {
  return this.toLowerCase()
    .trim()
    .replace(/[^a-z|A-Z|0-9]/g, '-');
}

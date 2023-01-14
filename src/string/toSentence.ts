/**
 * @method toSentence
 * @param {string} this
 * @returns string

 * @description formats string to sentence without '.'
 * @example 'foo bar'.toSentence() // Foo bar
 */

export default function toSentence(this: string) {
  return this.split(/[\s,|-|_]+/)
    .map((word, i) => (i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');
}

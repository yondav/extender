/* eslint-disable @typescript-eslint/no-explicit-any */
import './object';
import './string';

declare global {
  interface String {
    firstLast(this: string): string[];
    toCamelcase(this: string): string;
    toSentence(this: string): string;
    toSlug(this: string): string;
    toTitlecase(this: string): string;
  }

  interface Object {
    filter<T extends Record<string, any>>(
      this: T,
      predicate: (
        value: [k: keyof T, v: any],
        index: number,
        array: [k: keyof T, v: any][]
      ) => unknown
    ): Partial<T>;
  }
}

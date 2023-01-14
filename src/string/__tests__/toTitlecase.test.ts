import '..';

describe('.toTitlecase()', () => {
  const input = 'tHis-shoULD BE in_tITLE(case) ';
  const value = input.toTitlecase();
  const expected = 'This Should Be In Title Case';

  it(`should return '${expected}'`, () => {
    expect(value).toBe(expected);
  });

  it('should return a string wherein first letter characters after whitespace are capitalized', () => {
    const isolate = (str: string) => str.split(' ').map(word => word.charAt(0));
    const checkUppercase = (chars: string[]) =>
      chars.every((char: string) => char === char.toUpperCase());

    expect(checkUppercase(isolate(value))).toBe(true);
  });

  it("should return a string wherin all letters that don't follow a white space are lowercase", () => {
    const isolate = (str: string) => str.split(' ').map(word => word.slice(1));
    const checkLowercase = (chars: string[]) =>
      chars.every((char: string) => char === char.toLowerCase());

    expect(checkLowercase(isolate(value))).toBe(true);
  });

  it('should return a trimmed string', () => {
    expect(/\s/g.test(value.slice(-1))).toBe(false);
  });
});

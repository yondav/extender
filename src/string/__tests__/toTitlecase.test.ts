import '..';

describe('.toTitlecase()', () => {
  const value = {
    1: 'hello world',
    2: 'hello-world',
    3: 'hElLo worlD',
    4: 'hELLO_WorlD',
    5: 'HELLO.WORLD ',
  };

  it("should return 'Hello World'", () => {
    expect(value[1].toTitlecase()).toBe('Hello World');
    expect(value[2].toTitlecase()).toBe('Hello World');
    expect(value[3].toTitlecase()).toBe('Hello World');
    expect(value[4].toTitlecase()).toBe('Hello World');
    expect(value[5].toTitlecase()).toBe('Hello World');
  });

  it('should return a string wherein first letter characters after whitespace are capitalized', () => {
    const isolate = (str: string) => str.split(' ').map(word => word.charAt(0));
    const checkUppercase = (chars: string[]) =>
      chars.every((char: string) => char === char.toUpperCase());

    expect(checkUppercase(isolate(value[1].toTitlecase()))).toBe(true);
    expect(checkUppercase(isolate(value[2].toTitlecase()))).toBe(true);
    expect(checkUppercase(isolate(value[3].toTitlecase()))).toBe(true);
    expect(checkUppercase(isolate(value[4].toTitlecase()))).toBe(true);
    expect(checkUppercase(isolate(value[5].toTitlecase()))).toBe(true);
  });

  it("should return a string wherin all letters that don't follow a white space are lowercase", () => {
    const isolate = (str: string) => str.split(' ').map(word => word.slice(1));
    const checkLowercase = (chars: string[]) =>
      chars.every((char: string) => char === char.toLowerCase());

    expect(checkLowercase(isolate(value[1].toTitlecase()))).toBe(true);
    expect(checkLowercase(isolate(value[2].toTitlecase()))).toBe(true);
    expect(checkLowercase(isolate(value[3].toTitlecase()))).toBe(true);
    expect(checkLowercase(isolate(value[4].toTitlecase()))).toBe(true);
    expect(checkLowercase(isolate(value[5].toTitlecase()))).toBe(true);
  });

  it('should return a trimmed string', () => {
    expect(/\s/g.test(value[1].toTitlecase().slice(-1))).toBe(false);
    expect(/\s/g.test(value[2].toTitlecase().slice(-1))).toBe(false);
    expect(/\s/g.test(value[3].toTitlecase().slice(-1))).toBe(false);
    expect(/\s/g.test(value[4].toTitlecase().slice(-1))).toBe(false);
    expect(/\s/g.test(value[5].toTitlecase().slice(-1))).toBe(false);
  });
});

import '..';

describe('.firstLast', () => {
  const input = 'hello world ';
  const value = input.firstLast();

  it('should return an array with two strings in it', () => {
    expect(Array.isArray(value)).toBe(true);
    expect(value.length).toBe(2);
    expect(typeof value[0]).toBe('string');
    expect(typeof value[1]).toBe('string');
  });

  it('should return an array wherein the characters match the first and last characters of a trimmed input', () => {
    const trimmed = input.trim();

    expect(value[0] === input[0]).toBe(true);
    expect(value[1] === trimmed[trimmed.length - 1]).toBe(true);
  });
});

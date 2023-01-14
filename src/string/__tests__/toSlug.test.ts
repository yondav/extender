import '..';

describe('.toSlug()', () => {
  const value = {
    1: 'hello world',
    2: 'hello_world',
    3: 'hElLo worlD ',
    4: 'HELLO.WORLD',
  };

  it("should return 'hello-world'", () => {
    expect(value[1].toSlug()).toBe('hello-world');
    expect(value[2].toSlug()).toBe('hello-world');
    expect(value[3].toSlug()).toBe('hello-world');
    expect(value[4].toSlug()).toBe('hello-world');
  });

  it('should return a lowercase string', () => {
    expect(value[1].toSlug()).toEqual(value[1].toSlug().toLowerCase());
    expect(value[2].toSlug()).toEqual(value[2].toSlug().toLowerCase());
    expect(value[3].toSlug()).toEqual(value[3].toSlug().toLowerCase());
    expect(value[4].toSlug()).toEqual(value[4].toSlug().toLowerCase());
  });

  it('should return a string without white spaces', () => {
    expect(/\s/g.test(value[1].toSlug())).toBe(false);
    expect(/\s/g.test(value[2].toSlug())).toBe(false);
    expect(/\s/g.test(value[3].toSlug())).toBe(false);
    expect(/\s/g.test(value[4].toSlug())).toBe(false);
  });

  it('should return a string only containing alphanumeric characters', () => {
    expect(/[^a-z|A-Z|0-9]/g.test(value[1].toSlug())).toBe(true);
    expect(/[^a-z|A-Z|0-9]/g.test(value[2].toSlug())).toBe(true);
    expect(/[^a-z|A-Z|0-9]/g.test(value[3].toSlug())).toBe(true);
    expect(/[^a-z|A-Z|0-9]/g.test(value[4].toSlug())).toBe(true);
  });
});

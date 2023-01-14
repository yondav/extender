import '..';

describe('.filter', () => {
  const value = {
    first: 'first',
    second: 'second',
    third: 'third',
    fourth: null,
  };

  describe("should return a partial of value, omitting the key value pair with the key 'second'", () => {
    const filtered = value.filter(([k]) => k !== 'second');

    it("should have as many key value pairs as original pairs minus the number of pairs that don't meet the filter", () => {
      expect(Object.keys(filtered).length).toBe(
        Object.keys(value).length - Object.keys(value).filter(k => k === 'second').length
      );
    });

    it("should have a property 'first'", () => {
      expect(filtered.first).toBeTruthy();
      expect(Object.keys(filtered).includes('first')).toBe(true);
    });

    it("should not have a property 'second'", () => {
      expect(filtered.second).toBeFalsy();
      expect(Object.keys(filtered).includes('second')).toBe(false);
    });

    it("should have a property 'third'", () => {
      expect(filtered.third).toBeTruthy();
      expect(Object.keys(filtered).includes('third')).toBe(true);
    });

    it("should not have a property 'fourth'", () => {
      expect(filtered.fourth).toBeFalsy();
      expect(Object.keys(filtered).includes('fourth')).toBe(true);
    });
  });

  describe("it should return a partial of value, ommitting key value pairs wherein the key does not include a 'd'", () => {
    const filtered = value.filter(([k]) => /[d]/g.test(k));

    it("should have as many key value pairs as original pairs minus the number of pairs that don't meet the filter", () => {
      expect(Object.keys(filtered).length).toBe(
        Object.keys(value).length - Object.keys(value).filter(k => !/[d]/g.test(k)).length
      );
    });

    it("should not have a property 'first'", () => {
      expect(filtered.first).toBeFalsy();
      expect(Object.keys(filtered).includes('first')).toBe(false);
    });

    it("should have a property 'second'", () => {
      expect(filtered.second).toBeTruthy();
      expect(Object.keys(filtered).includes('second')).toBe(true);
    });

    it("should have a property 'third'", () => {
      expect(filtered.third).toBeTruthy();
      expect(Object.keys(filtered).includes('third')).toBe(true);
    });

    it("should not have a property 'fourth'", () => {
      expect(filtered.fourth).toBeFalsy();
      expect(Object.keys(filtered).includes('fourth')).toBe(false);
    });
  });

  describe('should return a partial of value, omitting and key value pairs with falsey values', () => {
    const filtered = value.filter(([, v]) => !!v);

    it("should have as many key value pairs as original pairs minus the number of pairs that don't meet the filter", () => {
      expect(Object.keys(filtered).length).toBe(
        Object.keys(value).length - Object.values(value).filter(v => !v).length
      );
    });

    it('should only contain key value pairs with truthy values', () => {
      expect(Object.values(filtered).every(val => !!val)).toBe(true);
      expect(Object.values(filtered).filter(v => !v).length).toBe(0);
    });
  });
});

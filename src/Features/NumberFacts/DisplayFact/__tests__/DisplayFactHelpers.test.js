import { convertToRomanNumerals, fizzBuzz } from "../DisplayFactHelpers";

describe("DisplayFactHelpers", () => {
  describe("RomanNumeralsHelpersTests", () => {
    it("should return I n times when unit is less than 4", () => {
      expect(convertToRomanNumerals(3)).toEqual("III");
      expect(convertToRomanNumerals(13)).toEqual("XIII");
    });

    it("should return IV when passed 4", () => {
      expect(convertToRomanNumerals(4)).toEqual("IV");
    });

    it("should return V when passed 5", () => {
      expect(convertToRomanNumerals(5)).toEqual("V");
    });

    it("should return VII when passed 7", () => {
      expect(convertToRomanNumerals(7)).toEqual("VII");
    });

    it("should return IX when passsed 9", () => {
      expect(convertToRomanNumerals(9)).toEqual("IX");
    });

    it("should return X when passed 10", () => {
      expect(convertToRomanNumerals(10)).toEqual("X");
    });

    it("should return X n times when tens is less than 4", () => {
      expect(convertToRomanNumerals(30)).toEqual("XXX");
      expect(convertToRomanNumerals(20)).toEqual("XX");
      expect(convertToRomanNumerals(10)).toEqual("X");
      expect(convertToRomanNumerals(110)).toEqual("CX");
      expect(convertToRomanNumerals(410)).toEqual("CDX");
    });

    it("should return XI when passed 11", () => {
      expect(convertToRomanNumerals(11)).toEqual("XI");
    });

    it("should return XIV when passed 14", () => {
      expect(convertToRomanNumerals(14)).toEqual("XIV");
    });

    it("should return XIX when passed 19", () => {
      expect(convertToRomanNumerals(19)).toEqual("XIX");
    });

    it("should return XXIX when passed 29", () => {
      expect(convertToRomanNumerals(29)).toEqual("XXIX");
    });

    it("should return XL when passed 40", () => {
      expect(convertToRomanNumerals(40)).toEqual("XL");
    });

    it("should return L when passed 50", () => {
      expect(convertToRomanNumerals(50)).toEqual("L");
    });

    it("should return LX when passed 60", () => {
      expect(convertToRomanNumerals(60)).toEqual("LX");
    });

    it("should return LI when passed 51", () => {
      expect(convertToRomanNumerals(51)).toEqual("LI");
    });

    it("should return LIV when passed 54", () => {
      expect(convertToRomanNumerals(54)).toEqual("LIV");
    });

    it("should return LXXX when passed 80", () => {
      expect(convertToRomanNumerals(80)).toEqual("LXXX");
    });

    it("should return XC when passed 90", () => {
      expect(convertToRomanNumerals(90)).toEqual("XC");
    });

    it("should return C when passed 100", () => {
      expect(convertToRomanNumerals(100)).toEqual("C");
    });

    it("should return CD when passed 400", () => {
      expect(convertToRomanNumerals(400)).toEqual("CD");
    });

    it("should return D when passed 500", () => {
      expect(convertToRomanNumerals(500)).toEqual("D");
    });

    it("should return DC when passed 600", () => {
      expect(convertToRomanNumerals(600)).toEqual("DC");
    });

    it("should return C n times when hundreds is less than 4", () => {
      expect(convertToRomanNumerals(100)).toEqual("C");
      expect(convertToRomanNumerals(800)).toEqual("DCCC");
    });

    it("should return CM when passed 900", () => {
      expect(convertToRomanNumerals(900)).toEqual("CM");
    });

    it("should return CMXCIX when passed 999", () => {
      expect(convertToRomanNumerals(999)).toEqual("CMXCIX");
    });
  });

  describe("fizzBuzz", () => {
    it("should return '1' when passed 1", () => {
      expect(fizzBuzz(1)).toEqual("1");
    });

    it("should return '2' when passed 2", () => {
      expect(fizzBuzz(2)).toEqual("2");
    });

    it("should return 'Fizz' when passed 3", () => {
      expect(fizzBuzz(3)).toEqual("Fizz");
    });

    it("should return 'Buzz' when passed 5", () => {
      expect(fizzBuzz(5)).toEqual("Buzz");
    });

    it("should return 'fizzBuzz' when passed 15", () => {
      expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });
  });
});

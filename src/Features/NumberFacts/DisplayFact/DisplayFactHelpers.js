const addNumeral = (n, romanNumeral, romanInt, romanStr) => {
  while (n - romanInt >= -0) {
    romanNumeral += romanStr;
    n -= romanInt;
  }
  return [n, romanNumeral];
};

export const convertToRomanNumerals = (n) => {
  let romanNumeral = "";

  // if (typeof n === "number" && n > 0 && n < 1000) {
  [n, romanNumeral] = addNumeral(n, romanNumeral, 900, "CM");

  while (n - 500 >= -0) {
    romanNumeral += "D";
    n -= 500;
  }

  while (n - 400 >= -0) {
    romanNumeral += "CD";
    n -= 400;
  }

  while (n - 100 >= -0) {
    romanNumeral += "C";
    n -= 100;
  }

  while (n - 90 >= -0) {
    romanNumeral += "XC";
    n -= 90;
  }

  while (n - 50 >= -0) {
    romanNumeral += "L";
    n -= 50;
  }

  while (n - 40 >= -0) {
    romanNumeral += "XL";
    n -= 40;
  }

  while (n - 10 >= -0) {
    romanNumeral += "X";
    n -= 10;
  }

  while (n - 9 >= 0) {
    romanNumeral += "IX";
    n -= 9;
  }

  while (n - 5 >= 0) {
    romanNumeral += "V";
    n -= 5;
  }

  while (n - 4 >= 0) {
    romanNumeral += "IV";
    n -= 4;
  }

  while (n - 1 >= 0) {
    romanNumeral += "I";
    n -= 1;
  }
  // } else {
  //   romanNumeral = 0;
  // }

  return romanNumeral;
};

export function fizzBuzz(n) {
  var result = "";
  //check if number mulitple of 3  = fizz
  if (n % 3 === 0 && n % 5 === 0) {
    result = "FizzBuzz";
  } else if (n % 3 === 0) {
    result = "Fizz";
  } else if (n % 5 === 0) {
    result = "Buzz";
  } else {
    result = String(n);
  }
  //check if number multiple of 5 = bang
  //check if number multiple of 5 and 3 = fizzBuzz
  //return number if niether of the above
  return result;
}

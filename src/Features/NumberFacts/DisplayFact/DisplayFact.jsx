import React from "react";
import { fizzBuzz, convertToRomanNumerals } from "./DisplayFactHelpers";

let facts = {
  fizzBuzz: { header: "FizzBuzz", function: fizzBuzz },
  romanNumerals: { header: "Roman Numerals", function: convertToRomanNumerals },
};

const DisplayFact = ({ count, factType }) => {
  const fact = facts[factType];
  if (fact === undefined) {
    throw new Error(`${factType} is not a valid fact type`);
  }
  return (
    <h1>
      {fact.header}: {fact.function(count)}
    </h1>
  );
};

export default DisplayFact;

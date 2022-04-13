import React from "react";
import { fizzBuzz, convertToRomanNumerals } from "./DisplayFactHelpers";

const DisplayFact = ({ count }) => {
  return (
    <>
      <h1>fizzBuzz: {fizzBuzz(count)}</h1>
      <h1>Roman Numerals: {convertToRomanNumerals(count)}</h1>
    </>
  );
};

export default DisplayFact;

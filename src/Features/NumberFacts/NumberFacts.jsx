import React from "react";
import { useState } from "react";
import DisplayFact from "./DisplayFact/DisplayFact";
import SetNumber from "./SetNumber/SetNumber";

const NumberFacts = () => {
  const [count, setCount] = useState(1);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <>
      <SetNumber count={count} handleChange={handleChange} />
      <DisplayFact count={count} factType="romanNumerals" />
    </>
  );
};

export default NumberFacts;

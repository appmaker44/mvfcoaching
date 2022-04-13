import React from "react";
import { useState } from "react";
import DisplayFact from "./DisplayFact/DisplayFact";
import SetNumber from "./SetNumber/SetNumber";
import SelectFact from "./SelectFact/SelectFact";

const NumberFacts = () => {
  const [count, setCount] = useState(1);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const [selectedFact, setFact] = useState("romanNumerals");
  const handleSelection = (e) => {
    console.log(e.target.value);
    setFact(e.target.value);
  };
  return (
    <>
      <SelectFact
        selectedFact={selectedFact}
        handleSelection={handleSelection}
      />
      <SetNumber count={count} handleChange={handleChange} />
      <DisplayFact count={count} factType={selectedFact} />
    </>
  );
};

export default NumberFacts;

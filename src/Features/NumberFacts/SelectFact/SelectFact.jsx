const SelectFact = ({ selectedFact, handleSelection }) => {
  return (
    <>
      <select value={selectedFact} onChange={handleSelection}>
        <option value="romanNumerals">Roman Numerals</option>
        <option value="fizzBuzz">FizzBuzz</option>
      </select>
    </>
  );
};

export default SelectFact;

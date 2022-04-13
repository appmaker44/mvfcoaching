const SetNumber = ({ count, handleChange }) => {
  return (
    <>
      <input type="number" value={count} onChange={handleChange} />
    </>
  );
};

export default SetNumber;

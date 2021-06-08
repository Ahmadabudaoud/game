const Input = (props) => {
  return (
    <input
      onChange={(event) => props.setGuess(event.target.value)}
      placeholder="Please enter a number"
    />
  );
};
export default Input;

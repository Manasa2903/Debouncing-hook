import { useState } from "react";
import useDebounce from "./../hooks/useDebounce";

const Debounce = () => {
  const [inputValue, setInputValue] = useState("Manasa");
  const [debounceVal, setDebounceVal] = useDebounce(1000, inputValue);
  const [debounceVal2, setDebounceVal2] = useDebounce(3000, inputValue);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setDebounceVal(e.target.value);
    setDebounceVal2(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={inputValue} />
      <p>Normal Input Value : {inputValue}</p>
      <p>Debounce Val : {debounceVal}</p>
      <p>Debounce Val2 : {debounceVal2}</p>
    </div>
  );
};

export default Debounce;

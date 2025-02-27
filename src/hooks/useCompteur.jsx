import { useState } from "react";

const useCompteur = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return { count, handleIncrement, handleDecrement, handleReset };
};

export default useCompteur;

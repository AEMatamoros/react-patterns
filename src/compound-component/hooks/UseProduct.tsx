import { useState } from "react";

export default function UseProduct() {
  const [counter, setcounter] = useState(0);

  const handleCounterValue = (amount = 1): void => {
    counter + amount >= 0 && setcounter(counter + amount);
  };

  return {
    counter,
    setcounter,
    handleCounterValue,
  };
}

import { useState } from "react";
import { iOnChangeArgs, iProduct } from "../interfaces/interfaces";

export interface iUseProductProps {
  product: iProduct;
  onChange?: (args: iOnChangeArgs) => void;
}

export default function UseProduct({ product, onChange }: iUseProductProps) {
  const [counter, setcounter] = useState(0);

  const handleCounterValue = (amount = 1): void => {
    let count = Math.max(counter + amount, 0);
    setcounter(count);
    onChange && onChange({ product, count });
  };

  return {
    counter,
    setcounter,
    handleCounterValue,
  };
}
import { useState, useEffect, useRef } from "react";
import {
  iinitialValues,
  iOnChangeArgs,
  iProduct,
} from "../interfaces/interfaces";

export interface iUseProductProps {
  product: iProduct;
  onChange?: (args: iOnChangeArgs) => void;
  value?: number;
  initialValues?: iinitialValues;
}

export default function UseProduct({
  product,
  onChange,
  value = 0,
  initialValues,
}: iUseProductProps) {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);

  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);
  const maxRaised = useRef(false);

  const handleCounterValue = (amount: number): void => {
    if (isControlled.current) {
      return onChange!({ count: amount, product });
    }

    let count;
    if (initialValues && initialValues.maxCount) {
      count = Math.min(Math.max(counter + amount, 0), initialValues.maxCount);
    } else {
      count = Math.max(counter + amount, 0);
    }
    maxRaised.current = !!(count === initialValues?.maxCount) ? true : false;

    setcounter(count);
    onChange && onChange({ product, count });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setcounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  let handleReset = () => {
    setcounter(0);
    maxRaised.current = false;
  };

  return {
    counter,
    setcounter,
    handleCounterValue,
    handleReset,
    maxRaised: maxRaised.current,
  };
}

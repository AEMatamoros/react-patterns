import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ButtonsContainer = () => {
  const { counter, handleCounterValue } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleCounterValue(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={styles.buttonAdd}
        onClick={() => handleCounterValue(1)}
      >
        +
      </button>
    </div>
  );
};

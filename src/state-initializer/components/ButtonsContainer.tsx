import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ButtonsContainer = ({
  className,
  maxRaised,
}: {
  className?: string;
  maxRaised?: boolean;
}) => {
  const { counter, handleCounterValue } = useContext(ProductContext);
  return (
    <>
      <div className={`${styles.buttonsContainer} ${className}`}>
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
          disabled={maxRaised}
        >
          +
        </button>
        <br />
      </div>
      {maxRaised && (
        <p style={{ color: "white" }}>Se ha alcanzado el limite de productos</p>
      )}
    </>
  );
};

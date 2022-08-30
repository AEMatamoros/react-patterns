import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductDescription = ({ title = "" }) => {
  const { product } = useContext(ProductContext);
  let currentTitle;
  if (title) {
    currentTitle = title;
  } else if (product.title) {
    currentTitle = product.title;
  } else {
    currentTitle = "";
  }
  return <span className={styles.producttitle}>{product.title}</span>;
};

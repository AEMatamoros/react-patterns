import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface iProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductDescription = ({ title, className, style }: iProps) => {
  const { product } = useContext(ProductContext);
  let currentTitle;
  if (title) {
    currentTitle = title;
  } else if (product.title) {
    currentTitle = product.title;
  } else {
    currentTitle = "";
  }
  return (
    <span className={`${styles.producttitle} ${className}`} style={style}>
      {product.title}
    </span>
  );
};

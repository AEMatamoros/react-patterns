import styles from "../styles/styles.module.css";
import UseProduct from "../hooks/UseProduct";
import { createContext, useContext } from "react";
//Interfaces
import { iProps, iProductProvider } from "../interfaces/interfaces";
//Components
import ProductImage from "./ProductImage";
import { ProductDescription } from "./ProductDescription";
import { ButtonsContainer } from "./ButtonsContainer";

export const ProductContext = createContext({} as iProductProvider);
const { Provider } = ProductContext;

export default function ProductCard({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: iProps) {
  const { counter, handleCounterValue } = UseProduct({
    product,
    onChange,
    value,
  });

  return (
    <Provider value={{ counter, handleCounterValue, product }}>
      <div className={`${className} + ${styles.productCard}`} style={style}>
        {children}
      </div>
    </Provider>
  );
}

ProductCard.Title = ProductDescription;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ButtonsContainer;

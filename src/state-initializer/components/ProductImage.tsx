import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export default function ProductImage({ img = "", className = "" }) {
  const { product } = useContext(ProductContext);

  let currentImg;

  if (img) {
    currentImg = img;
  } else if (product.img) {
    currentImg = product.img;
  } else {
    currentImg = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={!!currentImg ? currentImg : noImage}
      alt="No Image"
    />
  );
}

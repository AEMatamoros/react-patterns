import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import UseProduct from "../hooks/UseProduct";
import { ReactElement, createContext, useContext } from "react";

interface props {
  product: product;
  children?: ReactElement | ReactElement[]; //Convierte nuestro componente en un HOC(high Order component), children hace referencia a los componentes hijos
}

interface product {
  id: number;
  title: string;
  img?: string;
}

interface iProductProvider {
  product: product;
  counter: number;
  handleCounterValue: (value: number) => void;
}

const ProductContext = createContext({} as iProductProvider);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
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
      className={styles.productImg}
      src={!!currentImg ? currentImg : noImage}
      alt="No Image"
    />
  );
};

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

export default function ProductCard({ children, product }: props) {
  const { counter, handleCounterValue } = UseProduct();

  return (
    <Provider value={{ counter, handleCounterValue, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
}

ProductCard.Title = ProductDescription;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ButtonsContainer;

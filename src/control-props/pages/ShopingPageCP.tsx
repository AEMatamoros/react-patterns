import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { iOnChangeArgs } from "../interfaces/interfaces";
import "../styles/customStyles.css";

export interface iProduct {
  id: number;
  title: string;
  img?: string;
}

export interface iProductInCart {
  count: number;
  title: string;
  img?: string;
  id: number;
}
const products = [
  {
    id: 1,
    title: "Product title",
    img: "./coffee-mug.png",
  },
  {
    id: 2,
    title: "Product title 2",
    img: "./coffee-mug2.png",
  },
];

export default function ShopingPageCP() {
  const [shopingcart, setshopingcart] = useState<{
    [key: string]: iProductInCart;
  }>({});

  const onProductChange = ({ count, product }: iOnChangeArgs) => {
    setshopingcart((oldShopingCartState) => {
      const productInCart: iProductInCart = oldShopingCartState[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShopingCartState,
          [product.id]: productInCart,
        };
      }

      !!oldShopingCartState && delete oldShopingCartState[product.id];
      return { ...oldShopingCartState };
    });
  };

  return (
    <>
      <h1>Control Props</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              className="bg-dark"
              key={product.id}
              onChange={(event) => onProductChange(event)}
              value={!!shopingcart ? shopingcart[product.id]?.count || 0 : 0}
            >
              <ProductCard.Image className="customImg" />
              <ProductCard.Title
                style={{
                  color: "white",
                }}
              />
              <ProductCard.Buttons className="darkMode-buttons" />
            </ProductCard>
          );
        })}
      </div>

      <div className="shopping-cart">
        {shopingcart &&
          Object.entries(shopingcart).map(([key, product]) => {
            return (
              <ProductCard
                product={product}
                className="bg-dark"
                style={{ width: "150px" }}
                key={key}
                onChange={(event) => onProductChange(event)}
                value={shopingcart[product.id]?.count || 0}
              >
                <ProductCard.Image className="customImg" />
                <ProductCard.Title
                  style={{
                    color: "white",
                  }}
                />
                <ProductCard.Buttons className="darkMode-buttons" />
              </ProductCard>
            );
          })}
      </div>
    </>
  );
}

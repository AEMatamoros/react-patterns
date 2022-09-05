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

export default function ShopingPageEI() {
  let product = products[0];

  return (
    <>
      <h1>State Initializer</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            initialValues={{
              count: 3,
              maxCount: 10,
            }}
          >
            {(handleReset, maxRaised) => (
              <>
                <ProductCard.Image className="customImg" />
                <ProductCard.Title
                  style={{
                    color: "white",
                  }}
                />
                <ProductCard.Buttons
                  className="darkMode-buttons"
                  maxRaised={maxRaised}
                />
                <button
                  onClick={handleReset}
                  style={{
                    width: "100%",
                  }}
                >
                  Reset
                </button>
              </>
            )}
          </ProductCard>
        ))}
      </div>
    </>
  );
}

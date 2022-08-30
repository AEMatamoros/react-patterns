import ProductCard from "../components/ProductCard";
import "../styles/customStyles.css";
const product = {
  id: 1,
  title: "Product title",
  img: "./coffee-mug.png",
};

export default function ShopingPageES() {
  return (
    <>
      <h1>Extensible Styles</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="customImg" />
          <ProductCard.Title
            style={{
              color: "white",
            }}
          />
          <ProductCard.Buttons className="darkMode-buttons" />
        </ProductCard>
      </div>
    </>
  );
}

import ProductCard from "../components/ProductCard";

const product = {
  id: 1,
  title: "Product title",
  img: "./coffee-mug.png",
};

export default function ShopingPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  );
}

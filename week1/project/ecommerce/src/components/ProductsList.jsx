import ProductCard from "./ProductCard";

const ProductsList = ({ List }) => {
  const ProductItems = List.map((product) => (
    <ProductCard
      key={product.id}
      ImageSource={product.image}
      Title={product.title}
    />
  ));
  return (
    <ul className="flex flex-column flex-row-ns flex-wrap">{ProductItems}</ul>
  );
};

export default ProductsList;

import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const ProductItems = products.map((product) => (
    <ProductCard
      key={product.id}
      ImageSource={product.image}
      Title={product.title}
    />
  ));
  return (
    <ul className="ma3 flex flex-column flex-row-ns flex-wrap">
      {ProductItems}
    </ul>
  );
};

export default ProductsList;

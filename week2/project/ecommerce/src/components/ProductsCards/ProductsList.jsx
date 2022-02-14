import { Products } from "../../fake-data/all-products";
import ProductCard from "./ProductCard";

const ProductsList = ({ SelectedCategory }) => {
  const ProductsArr = Products;

  const FilterProducts = SelectedCategory
    ? ProductsArr.filter((Product) => {
        const CategoryArr = SelectedCategory.split(": ");
        return Product.category.toLowerCase() === CategoryArr[1];
      })
    : ProductsArr;

  const ProductItems = FilterProducts.map((product) => (
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

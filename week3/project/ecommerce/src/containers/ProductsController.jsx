import { useContext } from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import ProductsList from "../components/ProductsCards/ProductsList";
import useFetch from "../components/useFetch";
const ProductsController = () => {
  const { selectedCategory } = useContext(SelectedCategoryContext);
  let url = `https://fakestoreapi.com/products/`;
  if (selectedCategory) {
    url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  }
  const { data: products, isLoading, error } = useFetch(url);
  if (error) {
    return <div className="b tc ma5">{error}</div>;
  }

  if (isLoading) {
    return <div className="tc ma5">Loading...</div>;
  }

  return <ProductsList products={products} />;
};
export default ProductsController;

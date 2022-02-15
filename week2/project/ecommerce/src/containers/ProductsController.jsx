import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsCards/ProductsList";

const ProductsController = ({ SelectedCategory }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [productError, setProductError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        let url = `https://fakestoreapi.com/products/`;
        if (SelectedCategory) {
          url = `https://fakestoreapi.com/products/category/${SelectedCategory}`;
        }
        const response = await fetch(url);
        const Products = await response.json();
        setProducts(Products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setProductError(true);
      }
    })();
  }, [SelectedCategory]);
  if (productError) {
    return (
      <div className="tc ma5">Oops, something went wrong. Come back later!</div>
    );
  }

  if (isLoading) {
    return <div className="tc ma5">Loading...</div>;
  }

  return <ProductsList products={products} />;
};
export default ProductsController;

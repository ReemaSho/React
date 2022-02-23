import { useContext, useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProductsList from "../components/ProductsCards/ProductsList";
const FavoritesController = () => {
  const { idArr } = useContext(FavoritesContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const promises = idArr.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`)
    );
    (async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(promises);

        const results = await Promise.all(
          responses.map((response) => response.json())
        );

        setProducts(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    })();
  }, [idArr]);

  if (isLoading) {
    return <div className="tc ma5">Loading...</div>;
  }
  if (error) {
    return (
      <div className="tc ma5">
        "Oops, something went wrong. Come back later!"
      </div>
    );
  }

  return products.length > 1 ? (
    <ProductsList products={products} />
  ) : (
    <div className="b tc ma5">You haven't chosen any favorites yet!</div>
  );
};

export default FavoritesController;

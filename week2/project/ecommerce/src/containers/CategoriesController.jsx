import { useState, useEffect } from "react";
import CategoryList from "../components/CategoriesButtons/CategoryList";
const CategoriesController = ({ SelectedCategory, ChangeCategory }) => {
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [categoryError, setCategoryError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const categories = await response.json();
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        setCategoryError(true);
        console.log(error);
      }
    })();
  }, []);

  if (categoryError) {
    return (
      <div className="tc ma5">Oops, something went wrong. Come back later!</div>
    );
  }

  if (isLoading) {
    return null;
  }

  return (
    <CategoryList
      SelectedCategory={SelectedCategory}
      AllCategories={categories}
      ChangeCategory={ChangeCategory}
    />
  );
};
export default CategoriesController;

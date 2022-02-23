import { useContext } from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import useFetch from "../components/useFetch";
import CategoryList from "../components/CategoriesButtons/CategoryList";
const CategoriesController = () => {
  const { selectedCategory, changeCategory } = useContext(
    SelectedCategoryContext
  );
  const {
    data: categories,
    isLoading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/categories`);

  if (error) {
    return <div className="tc ma5">{error}</div>;
  }

  if (isLoading) {
    return null;
  }

  return (
    <CategoryList
      SelectedCategory={selectedCategory}
      AllCategories={categories}
      ChangeCategory={changeCategory}
    />
  );
};
export default CategoriesController;

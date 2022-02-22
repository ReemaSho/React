import { useState } from "react";
import CategoriesController from "./CategoriesController";
import ProductsController from "./ProductsController";

const CategoriesAndProductsWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const changeCategory = (e) => {
    if (selectedCategory === e.target.value) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(e.target.value);
    }
  };
  return (
    <div>
      <CategoriesController
        SelectedCategory={selectedCategory}
        ChangeCategory={changeCategory}
      />
      <ProductsController SelectedCategory={selectedCategory} />
    </div>
  );
};
export default CategoriesAndProductsWrapper;

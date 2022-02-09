import { useState } from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";
import { Products } from "../fake-data/all-products";
import AllCategories from "../fake-data/all-categories";

function App() {
  const ProductsArr = Products;
  const [Category, setCategory] = useState(null);

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const FilterProducts = Category
    ? ProductsArr.filter((Product) => {
        const CategoryArr = Category.split(": ");
        return Product.category.toLowerCase() === CategoryArr[1];
      })
    : ProductsArr;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="ma3">Products</h1>
        <CategoryList
          List={AllCategories}
          selectedCategory={Category}
          click={changeCategory}
        />
      </header>
      <ProductsList List={FilterProducts} />
    </div>
  );
}

export default App;

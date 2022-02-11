import { useState } from "react";
import HeaderTitle from "../components/Header/HeaderTitle";
import CategoryList from "../components/CategoriesButtons/CategoryList";
import ProductsList from "../components/ProductsCards/ProductsList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <HeaderTitle Title={"Products"} />
      <CategoryList
        SelectedCategory={selectedCategory}
        SetSelectedCategory={setSelectedCategory}
      />
      <ProductsList SelectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

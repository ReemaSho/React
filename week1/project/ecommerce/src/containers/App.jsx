import { useState } from "react";
import ProductsList from "../components/ProductsList";
import CategoryList from "../components/CategoryList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="ma3">Products</h1>
        <CategoryList
          SelectedCategory={selectedCategory}
          SetSelectedCategory={setSelectedCategory}
        />
      </header>
      <ProductsList SelectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

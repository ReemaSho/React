import HeaderTitle from "../components/Header/HeaderTitle";
import FilterProductsOnCategory from "./FilteredProductsOnCategory";

function App() {
  return (
    <div className="App">
      <HeaderTitle Title={"Products"} />
      <FilterProductsOnCategory />
    </div>
  );
}

export default App;

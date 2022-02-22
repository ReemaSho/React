import HeaderTitle from "../components/Header/HeaderTitle";
import CategoriesAndProductsWrapper from "./CategoriesAndProductsWrapper";

function App() {
  return (
    <div className="App">
      <HeaderTitle Title={"Products"} />
      <CategoriesAndProductsWrapper />
    </div>
  );
}

export default App;

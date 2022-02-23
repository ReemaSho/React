import Navbar from "./components/Navigation/Navbar";
import CategoriesController from "./containers/CategoriesController";
import ProductsController from "./containers/ProductsController";
import ProductDetails from "./pages/ProductDetails";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SelectedCategoryProvider } from "./context/SelectedCategoryContext";
import Favorites from "./pages/ Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <SelectedCategoryProvider>
        <FavoritesProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar Title={"Products"} />
                  <CategoriesController />
                  <ProductsController />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>
      </SelectedCategoryProvider>
    </Router>
  );
}

export default App;

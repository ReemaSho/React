import Navbar from "../components/Navigation/Navbar";
import FavoritesController from "../containers/FavoritesController";
const Favorites = () => {
  return (
    <>
      <Navbar Title="Products" />
      <FavoritesController />
    </>
  );
};

export default Favorites;

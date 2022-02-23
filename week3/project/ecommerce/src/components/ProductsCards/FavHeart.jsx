import { useContext } from "react";
import regularHeart from "../../assets/heart-regular.svg";
import solidHeart from "../../assets/heart-solid.svg";
import { FavoritesContext } from "../../context/FavoritesContext";
const FavHeart = ({ Id }) => {
  const { addRemoveId, isFavorite } = useContext(FavoritesContext);
  const isInFavorites = isFavorite(Id);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        addRemoveId(Id);
      }}
      className="absolute right-0 pointer"
    >
      <img
        className="h2"
        src={isInFavorites ? solidHeart : regularHeart}
        alt="heart"
      />
    </div>
  );
};

export default FavHeart;

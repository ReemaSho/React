import { useNavigate } from "react-router-dom";
import FavHeart from "./FavHeart";
import "./css/productCard.css";

const ProductCard = ({ Title, ImageSource, Id }) => {
  const navigate = useNavigate();
  const toSingleProductPage = () => {
    navigate(`/product/${Id}`);
  };
  return (
    <li className="card tc pa3 flex flex-column pointer">
      <div className="relative ">
        <FavHeart Id={Id} />
        <img
          className="card-image"
          onClick={() => toSingleProductPage()}
          src={ImageSource}
          alt="product"
        />
      </div>
      <p onClick={() => toSingleProductPage()}>{Title}</p>
    </li>
  );
};
export default ProductCard;

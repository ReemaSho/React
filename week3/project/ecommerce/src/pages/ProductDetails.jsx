import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import Navbar from "../components/Navigation/Navbar";
import FavHeart from "../components/ProductsCards/FavHeart";
import "./css/ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const numericId = +id;
  const {
    data: product,
    isLoading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${numericId}`);
  if (error) {
    return <div className="b tc ma5">{error}</div>;
  }

  if (isLoading) {
    return <div className="tc ma5">Loading...</div>;
  }
  return (
    <>
      <Navbar Title={product.title}></Navbar>
      <div className="product-container flex items-center ">
        <p className="w-50 pa4 mr2 h4"> {product.description}</p>
        <div className="image-container relative w-40 pa1 ma2 ">
          <FavHeart Id={numericId} />
          <img
            className="img-details h6"
            src={product.image}
            alt={`Product ${product.category}`}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

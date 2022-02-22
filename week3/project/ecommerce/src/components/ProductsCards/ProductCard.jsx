import "./productCard.css";

const ProductCard = ({ Title, ImageSource }) => {
  return (
    <li className="card tc pa3 flex flex-column">
      <img src={ImageSource} alt="product" />
      <p>{Title}</p>
    </li>
  );
};
export default ProductCard;

import { Link } from "react-router-dom";

const Navbar = ({ Title }) => {
  return (
    <nav className="flex justify-between ma2">
      <h1 className="w-75  mr2">{Title}</h1>
      <div className="flex justify-around items-center mr2">
        <Link className=" ma2 " to="/">
          Products
        </Link>
        <Link className=" ma2" to="/Favorites">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

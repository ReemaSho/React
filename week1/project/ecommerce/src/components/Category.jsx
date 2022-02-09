import "./Css/category.css";

const Category = ({ isActiveStyle, changeCategory, Value }) => {
  return (
    <button
      className={` f5  ph3 ma1 pv2 mb2 dib black b   ${isActiveStyle}`}
      onClick={changeCategory}
      value={Value}
    >
      {Value}
    </button>
  );
};
export default Category;

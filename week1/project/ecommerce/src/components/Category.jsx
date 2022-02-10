import "./Css/category.css";

const Category = ({ isActiveStyle, ChangeCategory, Value }) => {
  return (
    <button
      className={`category f5  ph3 ma1 pv2 mb2 dib black b ${isActiveStyle}`}
      onClick={ChangeCategory}
      value={Value}
    >
      {Value}
    </button>
  );
};
export default Category;

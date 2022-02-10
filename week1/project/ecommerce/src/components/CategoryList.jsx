import AllCategories from "../fake-data/all-categories";
import Category from "./Category";

const CategoryList = ({ SelectedCategory, SetSelectedCategory }) => {
  const changeCategory = (e) => {
    SetSelectedCategory(e.target.value);
  };
  const categories = AllCategories.map((CategoryItem) => (
    <Category
      key={CategoryItem}
      isActiveStyle={`${SelectedCategory === CategoryItem ? "isActive" : ""}`}
      ChangeCategory={changeCategory}
      Value={CategoryItem}
    />
  ));

  return <div className="flex pv2 ma3">{categories}</div>;
};
export default CategoryList;

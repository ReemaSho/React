import Category from "./Category";

const CategoryList = ({ SelectedCategory, AllCategories, ChangeCategory }) => {
  const categories = AllCategories.map((CategoryItem) => (
    <Category
      key={CategoryItem}
      isActiveStyle={`${SelectedCategory === CategoryItem ? "isActive" : ""}`}
      ChangeCategory={ChangeCategory}
      Value={CategoryItem}
    />
  ));

  return <div className="flex pv2 ma3">{categories}</div>;
};
export default CategoryList;

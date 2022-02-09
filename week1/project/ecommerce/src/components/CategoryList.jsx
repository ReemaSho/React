import Category from "./Category";

const CategoryList = ({ List, selectedCategory, click }) => {
  const categories = List.map((CategoryItem) => (
    <Category
      key={CategoryItem}
      isActiveStyle={`${selectedCategory === CategoryItem ? "isActive" : ""}`}
      changeCategory={click}
      Value={CategoryItem}
    />
  ));

  return <div className="flex pv2 ma3">{categories}</div>;
};
export default CategoryList;

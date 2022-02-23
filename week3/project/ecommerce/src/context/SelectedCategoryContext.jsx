import { createContext, useState } from "react";

const SelectedCategoryContext = createContext();
//
const SelectedCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const changeCategory = (e) => {
    if (selectedCategory === e.target.value) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(e.target.value);
    }
  };

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, changeCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export { SelectedCategoryContext, SelectedCategoryProvider };

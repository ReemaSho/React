import { useState, createContext } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [idArr, setIdArr] = useState([]);
  const isFavorite = (id) => {
    return idArr.includes(id);
  };

  const addRemoveId = (id) => {
    const isIncluded = idArr.includes(id);
    if (isIncluded) {
      const newIds = idArr.filter((idItem) => idItem !== id);
      setIdArr(newIds);
    } else {
      setIdArr([...idArr, id]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ idArr, addRemoveId, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };

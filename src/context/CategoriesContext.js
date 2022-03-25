import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [reloadCategories, setReloadCategories] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4242/categories")
      .then((res) => setCategories(res.data));
  }, [reloadCategories]);
  return (
    <CategoriesContext.Provider
      value={{ categories, reloadCategories, setReloadCategories }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;

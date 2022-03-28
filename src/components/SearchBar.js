import "./Styles/SearchBar.css";

import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { SousCategoriesContext } from "../context/SousCategoriesContext";
import { VillesContext } from "../context/VillesContext";

import Select from "./Select";

const SearchBar = (props) => {
  // Listes des données
  const { villes } = useContext(VillesContext);
  const { categories } = useContext(CategoriesContext);
  const { sousCategories } = useContext(SousCategoriesContext);

  // State des Select
  const { idCategorie } = useContext(ArticleContext);
  const { setIdCategorie } = useContext(ArticleContext);
  const { idVille } = useContext(ArticleContext);
  const { setIdville } = useContext(ArticleContext);
  const { idsousCategorie } = useContext(ArticleContext);
  const { setIdsousCategorie } = useContext(ArticleContext);
  const { searchFilter } = useContext(ArticleContext);
  const { setSearchFilter } = useContext(ArticleContext);

  // Fonction Rechercher
  const { searchLaunch } = useContext(ArticleContext);
  const { deleteFilter } = useContext(ArticleContext);
  const { deleteSearchHome } = useContext(ArticleContext);

  return (
    <div className="holderSearchBar">
      <div className="SearchBar">
        <input
          type="text"
          name="searchBar"
          placeholder="Rechercher"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        ></input>

        {/* SELECT Ville  */}
        {props.isVille && (
          <Select
            name={"Ville"}
            result={villes}
            value={idVille}
            set={setIdville}
          />
        )}

        {/* SELECT CATEGORIE */}
        {props.isCat && (
          <Select
            name={"Catégories"}
            result={categories}
            value={idCategorie}
            set={setIdCategorie}
          />
        )}

        {/* SELECT SOUS CAT */}
        {props.isSousCat && (
          <Select
            name={"Sous-catégorie"}
            result={sousCategories}
            value={idsousCategorie}
            set={setIdsousCategorie}
          />
        )}

        {props.isButtonGrid && (
          <div className="searchButtons">
            <button onClick={() => deleteFilter()}>Annuler</button>
            <button onClick={() => searchLaunch()}>Valider</button>
          </div>
        )}
        {props.isButtonHome && (
          <div className="searchButtons">
            <button onClick={() => deleteSearchHome()}>Annuler</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

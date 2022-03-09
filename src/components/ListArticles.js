import "./Styles/ListArticles.css";

import ArticlesTable from "./ArticlesTable";
import BarreRechercheArticles from "./BarreRechercheArticles";
import publishIcon from "../assets/publish.svg";
import { Link } from "react-router-dom";

const ListArticles = () => {
  return (
    <>
      {" "}
      <div className="firstContent">
        <h2 className="bjr-user">Bonjour [userName],</h2>
        <Link to="../articleForm">
          <img src={publishIcon} alt="publishIcon"></img>
        </Link>
      </div>
      <div className="bloc-content-column">
        <h3 className="titreMenu">Liste des articles</h3>

        <BarreRechercheArticles />
        <ArticlesTable />
      </div>
    </>
  );
};
export default ListArticles;

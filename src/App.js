import "./App.css";

import { Routes, Route } from "react-router-dom";

import ArticlesGrid from "./screens/ArticlesGrid";
import FirstVisit from "./screens/FirstVisit";
import IdentificationAdmin from "./screens/IdentificationAdmin";
import Home from "./screens/Home";
import PanelAdmin from "./screens/PanelAdmin";

import Parcours from "./components/Parcours";
import ListArticles from "./components/ListArticles"
import ArticleForm from "./components/ArticleForm"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etapes" element={<FirstVisit />} />
        <Route path="/articlesGrid" element={<ArticlesGrid />} />
        <Route path="admin" element={<IdentificationAdmin />}></Route>
        <Route path="admin-controler" element={<PanelAdmin />}>
          <Route path="articles" element={<ListArticles/>} />
          <Route path="categories" element={<ArticleForm/>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

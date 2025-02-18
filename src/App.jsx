import { Link, NavLink } from "react-router-dom";

import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Detail from "./pages/Detail/Detail";
import ErrorPage from "./pages/404/ErrorPage";
import RoutesPosts from "./Router/RoutesPosts";
import Bouton from "./components/bouton/Bouton";

function App() {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Accueil
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/detail"
        >
          Posts
        </NavLink>
      </nav>
      <RoutesPosts />
    </>
  );
}

export default App;

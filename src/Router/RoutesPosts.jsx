import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/accueil/Accueil";
import Detail from "../pages/Detail/Detail";
import ErrorPage from "../pages/404/ErrorPage";
import RoutesDinamyque from "../pages/routes Dynamique/RoutesDynamique";

const RoutesPosts = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/detail/:id" element={<RoutesDinamyque />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesPosts;

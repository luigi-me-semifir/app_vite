import { useNavigate } from "react-router-dom";
import Bouton from "../../components/bouton/Bouton";
import useCompteur from "../../hooks/useCompteur";

const Accueil = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCompteur(0);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail");
  };
  return (
    <>
      <h1>Je suis la Home page de l application</h1>
      <Bouton label="detail" onClick={handleNavigate} />

      <h2>{count}</h2>
      <Bouton label="+ 1" onClick={handleIncrement} />
      <Bouton label="- 1" onClick={handleDecrement} />
      <Bouton label="Reset" onClick={handleReset} />
    </>
  );
};

export default Accueil;

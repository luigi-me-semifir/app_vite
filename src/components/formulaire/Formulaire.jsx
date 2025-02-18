import { useState } from "react";
import PostsApi from "../../services/postsApi";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {
  const [users, setUsers] = useState({ nom: "", prenom: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsers((changeValue) => ({ ...changeValue, [name]: value }));
  };

  /**
   * Fonction pour soumettre le formulaire au backend
   * @param {} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { ...users };
    addUser(newUser);
  };

  /**
   * Fonction qui permets de gerer les erreurs et la redirection lors de la soumission
   * @param {} newUser
   */
  const addUser = (newUser) => {
    PostsApi.addUser(newUser)
      .then(() => navigate("/detail"))
      .catch((error) => console.error("Erreur", error));
  };

  return (
    <>
      <h1>Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={users.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="prenom"
          value={users.prenom}
          onChange={handleChange}
        />
        <button type="submit">Creer</button>
      </form>
    </>
  );
};
export default Formulaire;

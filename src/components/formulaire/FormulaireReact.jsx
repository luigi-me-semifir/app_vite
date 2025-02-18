import { useForm } from "react-hook-form";
import PostsApi from "../../services/postsApi";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    nom: yup
      .string()
      .required("Le nom est obligatoire")
      .length(3, "La longueur n est pas valide"),
    prenom: yup.string().required("Le prenom est obligatoire"),
    age: yup.number().required().min(18, "L age doit etre supérieur a 18 ans"),
  })
  .required();

const FormulaireReact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Données soumises ", data);
    PostsApi.addUser(data)
      .then(() => navigate("/detail"))
      .catch((error) => console.error("Erreur", error));
  };

  return (
    <>
      <h1>Formulaire avec librairie</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nom")} />
        {errors.nom && <p style={{ color: "red" }}>{errors.nom.message}</p>}
        <input {...register("prenom")} />
        {errors.prenom && (
          <p style={{ color: "red" }}>{errors.prenom.message}</p>
        )}
        <input {...register("age")} />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default FormulaireReact;

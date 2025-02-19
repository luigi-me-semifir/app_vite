import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostsApi from "../../services/postsApi";
import Cards from "../../components/cards/Cards";
import Bouton from "../../components/bouton/Bouton";

const RoutesDinamyque = () => {
  const [postId, setPostId] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    PostsApi.getPostsById(id).then((data) => setPostId(data));
  }, [id]);

  const handleClik = () => {
    PostsApi.deleteUser(id).then(() => navigate("/detail"));
  };

  return (
    <>
      <h1>Je suis la route n° {id} </h1>
      <Cards {...postId} />
      <Bouton label="suppr" onClick={handleClik} />
    </>
  );
};

export default RoutesDinamyque;

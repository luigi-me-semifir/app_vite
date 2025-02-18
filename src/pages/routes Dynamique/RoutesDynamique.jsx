import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsApi from "../../services/postsApi";
import Cards from "../../components/cards/Cards";

const RoutesDinamyque = () => {
  const [postId, setPostId] = useState({});
  const { id } = useParams();

  useEffect(() => {
    PostsApi.getPostsById(id).then((data) => setPostId(data));
  }, [id]);

  return (
    <>
      <h1>Je suis la route n° {id} </h1>
      <Cards {...postId} />
    </>
  );
};

export default RoutesDinamyque;

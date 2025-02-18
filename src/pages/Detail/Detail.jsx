import { useEffect, useState } from "react";
import PostsApi from "../../services/postsApi";
import Cards from "../../components/cards/Cards";
import { Link, NavLink } from "react-router-dom";

const Detail = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostsApi.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Je suis la page détail</h1>

      {posts.map((post) => (
        <Link key={post.id} to={`/detail/${post.id}`}>
          <Cards {...post} />
        </Link>
      ))}
    </>
  );
};

export default Detail;

const PostsApi = {
  /**
   * Fonction permetant d'appeler mon API post "./services/PostsApi.js"
   * @returns Liste de posts
   */
  getPosts: () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
  },

  getPostsById: (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
  }
}

export default PostsApi
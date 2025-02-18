const PostsApi = {
  /**
   * Fonction permetant d'appeler mon API post "./services/PostsApi.js"
   * @returns Liste de posts
   */
  getPosts: () => {
    return fetch("http://localhost:8080/posts")
      .then((response) => response.json())
  },

  getPostsById: (id) => {
    return fetch(`http://localhost:8080/posts/${id}`)
      .then((response) => response.json())
  },

  addUser: (user) => {
    return fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
  }
}

export default PostsApi
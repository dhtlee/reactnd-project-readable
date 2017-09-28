import Api from 'api';

export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS';
export const SET_SORT_BY = 'SET_SORT_BY';

export const getAllCategories = () => (dispatch) => {
  Api.getCategories()
    .then(categories => dispatch(getAllCategoriesSuccess(categories)));
}

export const getAllCategoriesSuccess = (categories) => {
  return {
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  }
}

export const getAllPosts = () => (dispatch) => {
  Api.getPosts()
    .then(posts => {
      dispatch(getAllPostsSuccess(posts));
      posts.map((post) => dispatch(getAllComments(post.id)));
    })
}

export const getAllPostsSuccess = (posts) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    posts
  }
}

export const getAllComments = (postId) => (dispatch) => {
  Api.getComments(postId)
    .then(comments => dispatch(getAllCommentsSuccess(comments)));
}

export const getAllCommentsSuccess = (comments) => {
  return {
    type: GET_ALL_COMMENTS_SUCCESS,
    comments
  }
}

export const setSortBy = (sortBy) => {
  return {
    type: SET_SORT_BY,
    sortBy
  }
}
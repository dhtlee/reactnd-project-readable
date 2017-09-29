import Api from 'api';

export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';
export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS';
export const SET_SORT_BY = 'SET_SORT_BY';

export const getAllCategories = () => (dispatch) => {
  Api.getCategories()
    .then(categories => dispatch(getAllCategoriesSuccess(categories)));
}

const getAllCategoriesSuccess = (categories) => {
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

const getAllPostsSuccess = (posts) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    posts
  }
}

export const upvotePost = (id) => {
  return {
    type: UPVOTE_POST,
    id
  }
}

export const downvotePost = id => {
  return {
    type: DOWNVOTE_POST,
    id
  }
}

const getAllComments = (postId) => (dispatch) => {
  Api.getComments(postId)
    .then(comments => dispatch(getAllCommentsSuccess(comments)));
}

const getAllCommentsSuccess = (comments) => {
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
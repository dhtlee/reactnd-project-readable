import Api from 'api';

// magic keywords used in state
export const CONTENT_POSTS = 'posts';
export const CONTENT_COMMENTS = 'comments';

export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const SORT_POSTS = 'SORT_POSTS';
export const UPVOTE_POST_SUCCESS = 'UPVOTE_POST_SUCCESS';
export const DOWNVOTE_POST_SUCCESS = 'DOWNVOTE_POST_SUCCESS';
export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS';
export const SORT_COMMENTS = 'SORT_COMMENTS';
export const UPVOTE_COMMENT_SUCCESS = 'UPVOTE_COMMENT_SUCCESS';
export const DOWNVOTE_COMMENT_SUCCESS = 'DOWNVOTE_COMMENT_SUCCESS';
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
      posts.map(({ id }) => dispatch(getAllComments(id)));
    })
}

const getAllPostsSuccess = (posts) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    posts
  }
}

const sortPosts = (sortByType, order) => {
  return {
    type: SORT_POSTS,
    sortByType,
    order
  }
}

export const upvotePost = (id) => (dispatch) => {
  Api.upvotePost(id)
    .then(({ id }) => dispatch(upvotePostSuccess(id)));
}

const upvotePostSuccess = (id) => {
  return {
    type: UPVOTE_POST_SUCCESS,
    id
  }
}

export const downvotePost = (id) => (dispatch) => {
  Api.downvotePost(id)
    .then(({ id }) => dispatch(downvotePostSuccess(id)));
}

const downvotePostSuccess = (id) => {
  return {
    type: DOWNVOTE_POST_SUCCESS,
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

const sortComments = (sortByType, order) => {
  return {
    type: SORT_COMMENTS,
    sortByType,
    order
  }
}

export const upvoteComment = (id) => (dispatch) => {
  Api.upvoteComment(id)
    .then(({ id }) => dispatch(upvoteCommentSuccess(id)));
}

const upvoteCommentSuccess = (id) => {
  return {
    type: UPVOTE_COMMENT_SUCCESS,
    id
  }
}

export const downvoteComment = (id) => (dispatch) => {
  Api.downvoteComment(id)
    .then(({ id }) => dispatch(downvoteCommentSuccess(id)));
}

const downvoteCommentSuccess = (id) => {
  return {
    type: DOWNVOTE_COMMENT_SUCCESS,
    id
  }
}

export const setSortBy = (content, sortByType, order) => (dispatch) => {
  dispatch(updateSortBy(content, sortByType, order));
  switch (content) {
    case CONTENT_POSTS:
      dispatch(sortPosts(sortByType, order));
      break;
    case CONTENT_COMMENTS:
      dispatch(sortComments(sortByType, order));
      break;
    default:
  }
}

const updateSortBy = (content, sortByType, order) => {
  return {
    type: SET_SORT_BY,
    content,
    sortByType,
    order
  }
}
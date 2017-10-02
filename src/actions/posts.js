import Api from 'api';
import { getAllComments } from 'actions/comments';
import { GET_ALL_POSTS_SUCCESS, SORT_POSTS, 
  UPVOTE_POST_SUCCESS, DOWNVOTE_POST_SUCCESS } from 'actions/constants';

export const getAllPostsAndComments = () => (dispatch) => {
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

export const sortPosts = (sortByType, order) => {
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
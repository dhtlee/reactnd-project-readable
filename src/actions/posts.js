import Api from 'api';
import { getAllComments, sortComments } from 'actions/comments';
import {
  GET_ALL_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  SORT_POSTS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS
} from 'actions/constants';
import { DEFAULT_SORT_BY } from 'reducers/sort-by';

export const getAllPostsAndComments = () => (dispatch) => {
  Api.getPosts()
    .then(posts => {
      dispatch(getAllPostsSuccess(posts));
      dispatch(sortPosts(DEFAULT_SORT_BY.posts.type, DEFAULT_SORT_BY.posts.order))
      const getAllCommentsPromise = posts.map(({ id }) => dispatch(getAllComments(id)));
      Promise.all(getAllCommentsPromise).then(() => dispatch(sortComments(DEFAULT_SORT_BY.comments.type, DEFAULT_SORT_BY.comments.order)));
    })
}

const getAllPostsSuccess = (posts) => {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    posts
  }
}

export const createPost = (data) => (dispatch) => {
  Api.createPost(data)
    .then(post => dispatch(createPostSuccess(post)))
    .then(() => dispatch(sortPosts(DEFAULT_SORT_BY.posts.type, DEFAULT_SORT_BY.posts.order)));
}

export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    post
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
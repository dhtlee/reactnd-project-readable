import Api from 'api';
import { GET_ALL_COMMENTS_SUCCESS, SORT_COMMENTS,
  UPVOTE_COMMENT_SUCCESS, DOWNVOTE_COMMENT_SUCCESS } from 'actions/constants';

export const getAllComments = (postId) => (dispatch) => {
  Api.getComments(postId)
    .then(comments => dispatch(getAllCommentsSuccess(comments)));
}

const getAllCommentsSuccess = (comments) => {
  return {
    type: GET_ALL_COMMENTS_SUCCESS,
    comments
  }
}

export const sortComments = (sortByType, order) => {
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
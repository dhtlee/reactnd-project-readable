import { combineReducers } from 'redux';

import { sortContent } from 'utils/helper';
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  SORT_POSTS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS,
  GET_ALL_COMMENTS_SUCCESS,
  SORT_COMMENTS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
  SET_SORT_BY
} from 'actions';

const DEFAULT_SORT_BY = {
  posts: {
    type: 'voteScore',
    order: 'descending'
  },
  comments: {
    type: 'voteScore',
    order: 'descending'
  } 
}

const categories = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}

const posts = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_POSTS_SUCCESS:
      return action.posts;
    case SORT_POSTS:
      const newState = [ ...state ];
      sortContent[action.order](newState, action.sortByType);
      return newState;
    case UPVOTE_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
      return state.map(p => post(p, action));
    default:
      return state;
  }
}

const post = (state = {}, action) => {
  switch(action.type) {
    case UPVOTE_POST_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case DOWNVOTE_POST_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore - 1
      }
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_COMMENTS_SUCCESS:
      return [
        ...state,
        ...action.comments
      ];
    case SORT_COMMENTS:
      const newState = [ ...state ];
      sortContent[action.order](newState, action.sortByType);
      return newState;
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
      return state.map(c => comment(c, action));
    default:
      return state;
  }
}

const comment = (state = {}, action) => {
  switch(action.type) {
    case UPVOTE_COMMENT_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore + 1
      }
    case DOWNVOTE_COMMENT_SUCCESS:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        voteScore: state.voteScore - 1
      }
    default:
      return state;
  }
}

const sortBy = (state = DEFAULT_SORT_BY, action) => {
  switch(action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        [action.content]: {
          type: action.sortByType,
          order: action.order
        }
      }
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
  sortBy
});
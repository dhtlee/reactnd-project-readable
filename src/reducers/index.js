import { combineReducers } from 'redux';
import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_COMMENTS_SUCCESS,
  SET_SORT_BY
} from 'actions';

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
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_COMMENTS_SUCCESS:
      return [
        ...state,
        action.comments
      ];
    default:
      return state;
  }
}

const sortBy = (state = 'voteScore', action) => {
  switch(action.type) {
    case SET_SORT_BY:
      return action.sortBy;
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
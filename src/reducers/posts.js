import { sortContent } from 'utils/helper';
import {
  GET_ALL_POSTS_SUCCESS,
  SORT_POSTS,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_SUCCESS
} from 'actions';

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

export default posts;
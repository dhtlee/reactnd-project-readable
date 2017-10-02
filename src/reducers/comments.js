import { sortContent } from 'utils/helper';
import {
  GET_ALL_COMMENTS_SUCCESS,
  SORT_COMMENTS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS
} from 'actions/constants';

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

export default comments;
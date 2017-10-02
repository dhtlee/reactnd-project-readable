import { SET_SORT_BY, CONTENT_POSTS, CONTENT_COMMENTS } from 'actions/constants';
import { sortPosts } from './posts';
import { sortComments } from './comments';

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
import { combineReducers } from 'redux';

import categories from './categories';
import comments from './comments';
import posts from './posts';
import sortBy from './sort-by';

export default combineReducers({
  categories,
  posts,
  comments,
  sortBy
});
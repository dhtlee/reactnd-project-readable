import { getCategories } from './categories';
import { getPosts, upvotePost, downvotePost } from './posts';
import { getComments, upvoteComment, downvoteComment } from './comments';

// magic keywords used for backend server request
export const OPTION_UPVOTE = 'upVote';
export const OPTION_DOWNVOTE = 'downVote';

// api template
export const BASE_URL='http://localhost:3001';
export const HEADERS = {
  'Authorization': 'some-auth-token',
  'Content-Type': 'application/json'
}

export default {
  getCategories,
  getPosts,
  upvotePost,
  downvotePost,
  getComments,
  upvoteComment,
  downvoteComment
}
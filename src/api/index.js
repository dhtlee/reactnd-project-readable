import { getCategories } from './categories';
import { getPosts, createPost, upvotePost, downvotePost } from './posts';
import { getComments, upvoteComment, downvoteComment } from './comments';

export default {
  getCategories,
  getPosts,
  createPost,
  upvotePost,
  downvotePost,
  getComments,
  upvoteComment,
  downvoteComment
}
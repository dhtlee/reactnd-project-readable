import { createSelector } from 'reselect';

import { sortContent } from 'utils/helper';

const getSortByPosts = (state) => state.sortBy.posts;
const getSortByComments = (state) => state.sortBy.comments;
const getPosts = (state) => state.posts;
const getComments = (state) => state.comments;
const getCategories = (state) => state.categories;

export const getPostsByCategory = createSelector(
  [ getPosts, getCategories ], (posts, category) => {
    return posts.filter(post => post.category === category);
  }
)

export const getPostsWithComments = createSelector(
  [ getPosts, getComments ], (posts, comments) => {
    return posts.map(post => ({
      ...post,
      comments: comments.filter(comment => 
        (comment.deleted === false && comment.parentId === post.id))
    }));
  }
)

export const getSortedPostsWithComments = createSelector(
  [ getPostsWithComments, getSortByPosts ], (postsAndComments, sortByPosts) => {
    sortContent[sortByPosts.order](postsAndComments, sortByPosts.type);
    return postsAndComments;
  }
)
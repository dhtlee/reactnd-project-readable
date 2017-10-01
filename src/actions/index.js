import Api from 'api';
import { sortPosts } from './posts';

// magic keywords used in state
export const CONTENT_POSTS = 'posts';
export const CONTENT_COMMENTS = 'comments';

// redux actions
export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const SORT_POSTS = 'SORT_POSTS';
export const UPVOTE_POST_SUCCESS = 'UPVOTE_POST_SUCCESS';
export const DOWNVOTE_POST_SUCCESS = 'DOWNVOTE_POST_SUCCESS';
export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS';
export const SORT_COMMENTS = 'SORT_COMMENTS';
export const UPVOTE_COMMENT_SUCCESS = 'UPVOTE_COMMENT_SUCCESS';
export const DOWNVOTE_COMMENT_SUCCESS = 'DOWNVOTE_COMMENT_SUCCESS';
export const SET_SORT_BY = 'SET_SORT_BY';
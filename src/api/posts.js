import { v4 } from 'uuid';
import { BASE_URL, HEADERS, OPTION_UPVOTE, OPTION_DOWNVOTE } from './constants';

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS })
    .then(res => res.json());
}

export const createPost = (data) => {
  return fetch(`${BASE_URL}/posts`,
    { 
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        ...data,
        id: v4(),
        timestamp: Date.now()
      })
    })
    .then(res => res.json());
}

const votePost = (option) => (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}`,
  {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ option }) 
  })
  .then(res => res.json());
}

export const upvotePost = votePost(OPTION_UPVOTE);

export const downvotePost = votePost(OPTION_DOWNVOTE);
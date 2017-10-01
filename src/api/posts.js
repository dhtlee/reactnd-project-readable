import { BASE_URL, HEADERS } from './constants';

// magic keywords used in backend server
export const OPTION_UPVOTE = 'upVote';
export const OPTION_DOWNVOTE = 'downVote';

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts`, { headers: HEADERS })
    .then(res => res.json());
}

export const upvotePost = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}`,
    {
      method: 'POST',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option: OPTION_UPVOTE }) 
    })
    .then(res => res.json());
}

export const downvotePost = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}`,
    {
      method: 'POST',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option: OPTION_DOWNVOTE }) 
    })
    .then(res => res.json());
}
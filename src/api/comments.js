import { BASE_URL, HEADERS } from './constants';

export const getComments = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, { headers: HEADERS })
    .then(res => res.json());
}

export const upvoteComment = (commentId) => {
  return fetch(`${BASE_URL}/comments/${commentId}`,
  {
    method: 'POST',
    headers: {
      ...HEADERS,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: 'upVote' })
  })
    .then(res => res.json());
}

export const downvoteComment = (commentId) => {
  return fetch(`${BASE_URL}/comments/${commentId}`,
  {
    method: 'POST',
    headers: {
      ...HEADERS,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: 'downVote' })
  })
    .then(res => res.json());
}
import { BASE_URL, HEADERS, OPTION_UPVOTE, OPTION_DOWNVOTE } from 'api';

export const getComments = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, { headers: HEADERS })
    .then(res => res.json());
}

const voteComment = (option) => (commentId) => {
  return fetch(`${BASE_URL}/comments/${commentId}`,
  {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ option })
  })
    .then(res => res.json());
}

export const upvoteComment = voteComment(OPTION_UPVOTE);

export const downvoteComment = voteComment(OPTION_DOWNVOTE);
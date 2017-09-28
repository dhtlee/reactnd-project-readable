import { BASE_URL, HEADERS } from './constants';

export const getComments = (postId) => {
  return fetch(`${BASE_URL}/posts/${postId}/comments`, { headers: HEADERS })
    .then(res => res.json());
}
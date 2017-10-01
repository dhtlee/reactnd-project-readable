import { BASE_URL, HEADERS } from 'api';

export const getCategories = () => {
  return fetch(`${BASE_URL}/categories`, { headers: HEADERS })
    .then(res => res.json())
    .then(data => data.categories);
}
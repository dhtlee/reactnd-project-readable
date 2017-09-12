export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES';

export const getAllCategoriesSuccess = (categories) => {
  return {
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories
  }
}
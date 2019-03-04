import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const fetchUser = () => async dispatch => {
  const response  = await jsonPlaceholder.get(`/posts/{$id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
}

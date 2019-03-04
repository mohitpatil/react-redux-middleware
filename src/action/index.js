import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchFromApi = () => async (dispatch, getState) => {
  //console.log('going in fetchpost');
  await dispatch(fetchPosts());
  //console.log('after fetchpost');
  const newList = _.uniq(_.map(getState().posts, 'userId'));
  //console.log('newlist', newList);
  newList.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

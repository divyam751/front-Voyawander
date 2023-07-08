// import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from "./actionType";

// export const getRequestAction = () => {
//     return { type: FETCH_LOADING };
// }
// export const getSuccessAction = (payload) => {
//     return { type: FETCH_SUCCESS, payload: payload };
// }
// export const getFailuerAction = () => {
//     return { type: FETCH_ERROR };
// }

export const setSearchData = (data) => {
    return {
      type: 'SET_SEARCH_DATA',
      payload: data,
    };
  };
  
  export const clearSearchData = () => {
    return {
      type: 'CLEAR_SEARCH_DATA',
    };
  };
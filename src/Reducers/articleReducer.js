import { SET_LOADING_STATUS, GET_ARTICLES } from "../Actions/ActionsType";

export const initialState = {
  articles: [],
  loading: false,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.result,
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;

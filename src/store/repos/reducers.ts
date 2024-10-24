import { IState } from "../types";
import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from "./types";

const initialState: IState = {
  repos: [],
  isFetching: false,
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_REPOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: payload.repos?.items,
        isFetching: false,
      };
    case GET_REPOS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};

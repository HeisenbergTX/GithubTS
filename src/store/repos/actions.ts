import { GET_REPOS_REQUEST, GET_REPOS_SUCCESS, GET_REPOS_ERROR } from "./types";

export const GetReposRequest = () => ({
  type: GET_REPOS_REQUEST,
});

export const GetReposSuccess = (payload: any) => ({
  type: GET_REPOS_SUCCESS,
  payload,
});

export const GetReposError = (payload: any) => ({
  type: GET_REPOS_ERROR,
  payload,
});

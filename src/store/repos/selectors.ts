import { RootState } from "../rootReducer";

export const getRepoIsFetching = (state: RootState) => state.repos.isFetching;

export const getRepos = (state: RootState) => state.repos.repos;

export const getRepoError = (state: RootState) => state.repos.error;

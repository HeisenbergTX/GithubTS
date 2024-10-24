import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GITHUB_TOKEN } from "../../config/app.config.ts";

import { GetReposError, GetReposSuccess } from "./actions";
import { GET_REPOS_REQUEST } from "./types";

const urlApi = "https://api.github.com/search/repositories?q=lang:TypeScript";

const getRepos = () =>
  axios.get(urlApi, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: GITHUB_TOKEN,
    },
  });

function* RepoSagaWorker() {
  try {
    //@ts-ignore
    const res = yield call(getRepos);
    yield put(GetReposSuccess({ repos: res.data }));
  } catch (e: any) {
    GetReposError({
      error: e.message,
    });
  }
}

function* RepoSagaWatcher() {
  yield takeLatest(GET_REPOS_REQUEST, RepoSagaWorker);
}

export default RepoSagaWorker;

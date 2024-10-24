import { all, fork } from "redux-saga/effects";

import repos from "./repos/sagas";

export function* rootSaga() {
  yield all([fork(repos)]);
}

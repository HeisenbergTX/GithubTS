import { combineReducers } from "redux";

import repos from "./repos/reducers";

const rootReducer = combineReducers({
  repos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

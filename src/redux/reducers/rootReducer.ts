import { combineReducers } from "redux";
import { searchRobotsReducer } from "./searchRobotsReducer";
import { requestRobotsReducer } from "./requestRobotsReducer";

export const rootReducer = combineReducers({
  searchRobots: searchRobotsReducer,
  requestRobots: requestRobotsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

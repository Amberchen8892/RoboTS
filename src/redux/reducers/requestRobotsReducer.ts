import { ActionTypes } from "../types";
import { RequestActions, Robot } from "../actions/requestActions";

// Robots init state
export interface RobotsState {
  isPending: boolean;
  robots: Robot[];
  error: string;
}
const initailStateRobots: RobotsState = {
  error: "",
  robots: [],
  isPending: false,
};

// fetch reducer
export const requestRobotsReducer = (
  state: RobotsState = initailStateRobots,
  action: RequestActions
) => {
  switch (action.type) {
    case ActionTypes.requestRobotPending:
      return { ...state, isPending: true };
    case ActionTypes.requestRobotSuccess:
      return { ...state, robots: action.payload, isPending: false };
    case ActionTypes.requestRobotFailed:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

import { ActionTypes } from "../types";
import { Dispatch } from "redux";

export interface Robot {
  id: string;
  name: string;
  email: string;
}

export interface RequestRobotsPendingAction {
  type: ActionTypes.requestRobotPending;
}
export interface RequestRobotsFailedAction {
  type: ActionTypes.requestRobotFailed;
  payload: string;
}
export interface RequestRobotsSuccessAction {
  type: ActionTypes.requestRobotSuccess;
  payload: Robot[];
}

export type RequestActions =
  | RequestRobotsPendingAction
  | RequestRobotsFailedAction
  | RequestRobotsSuccessAction;

export const requestRobots = () => {
  return async (dispatch: Dispatch) => {
    // no request
    dispatch<RequestRobotsPendingAction>({
      type: ActionTypes.requestRobotPending,
    });

    // async action
    const response: Response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data: Robot[] | undefined = await response.json();

    if (data) {
      dispatch<RequestRobotsSuccessAction>({
        type: ActionTypes.requestRobotSuccess,
        payload: data,
      });
    } else {
      dispatch<RequestRobotsFailedAction>({
        type: ActionTypes.requestRobotFailed,
        payload: "Error fetching data",
      });
    }
  };
};

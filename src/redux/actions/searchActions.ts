import { ActionTypes } from "../types";
import { Dispatch } from "redux";

export interface SetSearchFieldAction {
  type: ActionTypes.changeSearchField;
  payload: string;
}

export type SearchActions = SetSearchFieldAction;

export const setSearchField = (text: string): SetSearchFieldAction => {
  return {
    type: ActionTypes.changeSearchField,
    payload: text,
  };
};

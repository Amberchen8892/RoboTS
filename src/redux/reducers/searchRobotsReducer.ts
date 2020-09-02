import { ActionTypes } from "../types";
import { SearchActions } from "../actions/searchActions";

// initial search filed
export interface SearchState {
  searchField: string;
}
const initialSearchState: SearchState = {
  searchField: "",
};

// search field reducer
export const searchRobotsReducer = (
  state: SearchState = initialSearchState,
  action: SearchActions
) => {
  switch (action.type) {
    case ActionTypes.changeSearchField:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

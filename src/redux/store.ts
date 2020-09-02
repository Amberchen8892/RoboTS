import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

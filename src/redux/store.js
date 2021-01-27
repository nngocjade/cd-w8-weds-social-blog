import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(thunk));

export default store;
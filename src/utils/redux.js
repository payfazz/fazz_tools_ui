import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

// reducers
import ConfigReducer from "../reducers/config";
import DebugReducer from "../reducers/debug";

// epics
import { openConnectionWSEpic } from "../epics/config";

const reducers = combineReducers({
  config: ConfigReducer,
  debug: DebugReducer
});

const epics = combineEpics(openConnectionWSEpic);
const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  process.env.NODE_ENV === "development"
    ? composeEnhancers(applyMiddleware(epicMiddleware))
    : applyMiddleware(epicMiddleware)
);

export default store;

epicMiddleware.run(epics);

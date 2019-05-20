import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

// reducers
import ConfigReducer from "../reducers/config";
import DebugReducer from "../reducers/debug";

// epics
import { setConnectionWSEpic } from "../epics/config";

const reducers = combineReducers({
  config: ConfigReducer,
  debug: DebugReducer
});

const epics = combineEpics(setConnectionWSEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, applyMiddleware(epicMiddleware));

export default store;

epicMiddleware.run(epics);

import {
  SET_TAB_SELECTED,
  START_STREAMING_WS,
  SET_WS_CONNECTION_STATUS
} from "../actions/config";

const INITIAL_STATE = {
  conn: "",
  tabSelected: "0",
  isConnected: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TAB_SELECTED:
      return {
        ...state,
        tabSelected: action.payload
      };
    case START_STREAMING_WS:
      return {
        ...state,
        conn: `127.0.0.1:${action.payload}`
      };
    case SET_WS_CONNECTION_STATUS:
      return {
        ...state,
        isConnected: action.payload
      };
    default:
      return state;
  }
};

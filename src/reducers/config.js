import { SET_TAB_SELECTED } from "../actions/config";

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
    default:
      return state;
  }
};

import { READ_LOG } from "../actions/debug";

const INITIAL_STATE = {
  logs: [],
  readLogCount: 0,
  networks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case READ_LOG:
      return {
        ...state,
        readLogCount: state.logs.length - state.readLogCount
      };
    default:
      return state;
  }
};

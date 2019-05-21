import { READ_LOG, ADD_LOG, ADD_NETWORK } from "../actions/debug";

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
    case ADD_LOG:
      return {
        ...state,
        logs: state.logs.concat([action.payload])
      };
    case ADD_NETWORK:
      return {
        ...state,
        networks: state.networks.concat([action.payload])
      };
    default:
      return state;
  }
};

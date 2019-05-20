export const START_STREAMING_WS = "@CONFIG/START_STREAMING_WS";
export const STOP_STREAMING_WS = "@CONFIG/STOP_STREAMING_WS";
export const SET_TAB_SELECTED = "@CONFIG/SET_TAB_SELECTED";
export const SET_WS_CONNECTION_STATUS = "@CONFIG/SET_WS_CONNECTION_STATUS";

export const setTabSelected = tabSelected => ({
  type: SET_TAB_SELECTED,
  payload: tabSelected
});

export const openConnectionWS = (port = 8080) => ({
  type: START_STREAMING_WS,
  payload: port
});

export const setWSConnectionStatus = isConnected => ({
  type: SET_WS_CONNECTION_STATUS,
  payload: isConnected
});

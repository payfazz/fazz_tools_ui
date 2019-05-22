import { ofType } from "redux-observable";
import {
  concatMap,
  takeUntil,
  map,
  retryWhen,
  tap,
  delay
} from "rxjs/operators";
import {
  START_STREAMING_WS,
  STOP_STREAMING_WS,
  SET_WS_CONNECTION_STATUS
} from "../actions/config";
import { webSocket } from "rxjs/webSocket";
import store from "../utils/redux";
import LogType from "../value/log_type";
import { ADD_LOG, ADD_NETWORK } from "../actions/debug";

export const openConnectionWSEpic = action$ =>
  action$.pipe(
    ofType(START_STREAMING_WS),
    concatMap(() =>
      webSocket(
        `ws://127.0.0.1:${process.env.REACT_APP_FAZZ_DEBUGGER_PORT}`
      ).pipe(
        map(resp => {
          if (resp.hasOwnProperty("connected")) {
            return {
              type: SET_WS_CONNECTION_STATUS,
              payload: true
            };
          } else if (
            resp.hasOwnProperty("type") &&
            resp.type === LogType.Text
          ) {
            return {
              type: ADD_LOG,
              payload: resp
            };
          } else if (
            resp.hasOwnProperty("type") &&
            resp.type === LogType.Network
          ) {
            return {
              type: ADD_NETWORK,
              payload: resp
            };
          }

          return { type: "" };
        }),
        takeUntil(action$.ofType(STOP_STREAMING_WS)),
        retryWhen(error$ =>
          error$.pipe(
            delay(1000),
            tap(() =>
              store.dispatch({
                type: SET_WS_CONNECTION_STATUS,
                payload: false
              })
            )
          )
        )
      )
    )
  );

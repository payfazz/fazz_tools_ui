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

export const openConnectionWSEpic = action$ =>
  action$.pipe(
    ofType(START_STREAMING_WS),
    concatMap(action =>
      webSocket(`ws://127.0.0.1:${action.payload}`).pipe(
        map(resp => {
          if (resp.hasOwnProperty("connected")) {
            return {
              type: SET_WS_CONNECTION_STATUS,
              payload: true
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

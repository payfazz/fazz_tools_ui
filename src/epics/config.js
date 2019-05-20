import { ofType } from "redux-observable";
import { tap } from "rxjs/operators";
import { SET_CONNECTION_WS } from "../actions/config";
import { webSocket } from "rxjs/webSocket";

export const setConnectionWSEpic = action$ =>
  action$.pipe(
    ofType(SET_CONNECTION_WS),
    tap(() => console.log(1))
  );

import { applyMiddleware, combineReducers, createStore, Middleware, Store } from "redux";
import { loadState, saveState } from "../utils";
import thunk from "redux-thunk";
import { appointmentReducer } from "./reducers/appointmentReducer";
import { IAppointmentState } from "./types/appointmentTypes";
import { IAuthState } from "./types/authTypes";
import { authReducer } from "./reducers/authReducer";
import { throttle } from "lodash";
import { logout } from "./actions/authActions";
import { IPersonState } from "./types/peopleTypes";
import { personReducer } from "./reducers/personReducer";

export interface IApplicationState {
    appointment: IAppointmentState,
    auth: IAuthState,
    person: IPersonState;
}

const rootReducer = combineReducers<IApplicationState>({
    appointment: appointmentReducer,
    auth: authReducer,
    person: personReducer
});

const persistedState: {} = loadState("state");
export const checkTokenExpiration: Middleware<
    {}, // legacy type parameter added to satisfy interface signature
    IApplicationState
> = store => next => action => {
    if (Number(store.getState().auth.auth?.expirationTime) < Date.now() / 1000) {
        next(logout());
    }
    next(action)
}
export default function configureStore(): Store<IApplicationState> {
    const store: Store<IApplicationState> = createStore(rootReducer, persistedState, applyMiddleware(thunk, checkTokenExpiration));
    // TO DO: localstoraga state
    store.subscribe(throttle(() => {
        saveState({
            auth: store.getState().auth
        }, "state");
    }, 1000));
    return store;
}
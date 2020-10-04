import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { loadState, saveState } from "../utils";
import thunk from "redux-thunk";
import { appointmentReducer } from "./reducers/appointmentReducer";
import { IAppointmentState } from "./types/appointmentTypes";
import { IAuthState } from "./types/authTypes";
import { authReducer } from "./reducers/authReducer";
import { throttle } from "lodash";

export interface IApplicationState {
    appointment: IAppointmentState,
    auth: IAuthState
}

const rootReducer = combineReducers<IApplicationState>({
    appointment: appointmentReducer,
    auth: authReducer,
});

const persistedState: {} = loadState("state");

export default function configureStore(): Store<IApplicationState> {
    const store: Store<IApplicationState> = createStore(rootReducer, persistedState, applyMiddleware(thunk));
    // TO DO: localstoraga state
    store.subscribe(throttle(() => {
        saveState({
            auth: store.getState().auth
        }, "state");
    }, 1000));
    return store;
}
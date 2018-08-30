import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";

import * as fetch from './fetch.reducer'

export interface State {
    fetch: fetch.State
}


export const reducers: ActionReducerMap<State> = {
    fetch: fetch.reducer
};





// import * as user from '@modules/login/reducers/user.reducer';

// import * as root from '../../../reducers'

// export interface LoginState {
//     login: login.State
//     session: session.State
//     user: user.State
//     signup: signup.State
// }

// export interface State extends root.State {
//     login: LoginState
// }

// export const reducers: ActionReducerMap<LoginState> = {
//     login: login.reducer,
//     session: session.reducer,
//     user: user.reducer,
//     signup: signup.reducer
// };
import { Action } from '@ngrx/store';
import { FetchActions, FetchActionTypes } from '../actions/fetch.actions'

export interface State {
  user: any,
  pending: boolean,
  error: any
}

export const initialState: State = {
  user: {},
  pending: false,
  error: false
};


export function reducer(state = initialState, action: FetchActions): State {

  switch (action.type) {

    case FetchActionTypes.LoadFetchsSuccess:{
      return {
        ...state,
        user: action.payload
      }
    }

    default:
      return state;
  }


}

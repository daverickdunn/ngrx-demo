import { Action } from '@ngrx/store';

export enum FetchActionTypes {
  LoadFetchs = '[Fetch] Load Fetchs',
  LoadFetchsSuccess = '[Fetch] Load Fetchs Success',
  LoadFetchError = '[Fetch] Load Fetchs Error'
}

export class LoadFetchs implements Action {
  readonly type = FetchActionTypes.LoadFetchs;
}

export class LoadFetchsSuccess implements Action {
  readonly type = FetchActionTypes.LoadFetchsSuccess;
  constructor(public payload: any){}
}

export class LoadFetchError implements Action {
  readonly type = FetchActionTypes.LoadFetchError;
  constructor(public payload: any){}
}

export type FetchActions = 
LoadFetchs |
LoadFetchsSuccess |
LoadFetchError ;

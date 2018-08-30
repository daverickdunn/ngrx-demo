import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { FetchActions, FetchActionTypes, LoadFetchsSuccess, LoadFetchs, LoadFetchError } from '../actions/fetch.actions'
import { FetchService } from '../service/fetch.service';
import { of } from 'rxjs';

@Injectable()
export class FetchEffects {

  @Effect()
  getThings$ = this.actions$.pipe(
    ofType<LoadFetchs>(FetchActionTypes.LoadFetchs),
    exhaustMap(action =>

      this.service.getThing()
        .pipe(
          map(res => new LoadFetchsSuccess(res.response)),
          catchError(err => of(new LoadFetchError(err)),
          )
        )
    )


  )


  constructor(
    private actions$: Actions,
    private service: FetchService
  ) { }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { LoadFetchs } from '../../actions/fetch.actions'
import * as rootReducer from '../../reducers'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list = ['abc', '123', 'xyz']

  constructor(private store: Store<rootReducer.State>) { }

  ngOnInit() {

    console.log('dispatching')
    this.store.dispatch(new LoadFetchs);

  }

}

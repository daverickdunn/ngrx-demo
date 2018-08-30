import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchService {


  getThing() {
    return ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        crossDomain: true,
        createXHR: function () {
            return new XMLHttpRequest();
        }
    })
    .pipe(
      tap(res => console.log(res))
    )

}


  constructor() { }
}

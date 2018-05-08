import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class HomepageserviceService {
  token = new BehaviorSubject((sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''));
  showLoader = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }
  setToken(token) {
    this.token.next(token);
  }
  showHideLoader(value){
    this.showLoader.next(value);
  }
}

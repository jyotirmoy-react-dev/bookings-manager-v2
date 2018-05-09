import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
interface Logininfo {
  "id": "",
  "ttl": '',
  "created": "",
  "userId": ''
}
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

  setUserLogin(send_data){
return this.http.post < Logininfo > ('https://intense-bastion-97088.herokuapp.com/api/Users/login', send_data);
  }
  checkToken(): boolean {
    
    if (sessionStorage.getItem('token')) {
        return true;
      }
      else {
        return false;
      }
  }
  
}

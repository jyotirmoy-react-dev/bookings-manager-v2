import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
interface Logininfo {
  "id": "",
  "ttl": '',
  "created": "",
  "userId": ''
}
@Injectable()
export class HomepageserviceService {
  token = new BehaviorSubject((sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''));
  isLoggedin = new BehaviorSubject(false);
  showLoader = new BehaviorSubject(false);
  constructor(private http: HttpClient, private routes: Router) { }
  setToken(token) {
    this.token.next(token);
  }
  showHideLoader(value){
    this.showLoader.next(value);
  }

  setUserLogFlag(value){
    this.isLoggedin.next(value);
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

  logoutUser(){
    const token = sessionStorage.getItem('token');
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/Users/logout?access_token=' + token, token);
  }
  
  unauthUserLogOut(){
        this.showHideLoader(true);
        window.sessionStorage.removeItem('token');
        window.sessionStorage.clear();
        this.setUserLogFlag(false);
        this.routes.navigate(['login']);
        this.showHideLoader(false);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
interface Result {
  status: any
}
@Injectable()
export class Page1Service {
  serviceUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/appPages/';
  constructor(private http: HttpClient) {

   }
   savePage1(data){
     return this.http.post<Result>(this.serviceUrl + 'confirm.php', data);
   }

}

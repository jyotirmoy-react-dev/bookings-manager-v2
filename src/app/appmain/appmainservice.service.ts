import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Deletestatus {
  status: ''
}
@Injectable()
export class AppmainserviceService {
  serviceUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/main.php';
  constructor(private http: HttpClient) {

   }

   deleteApp(data) {
     return this.http.post<Deletestatus>(this.serviceUrl , data);
   }

}

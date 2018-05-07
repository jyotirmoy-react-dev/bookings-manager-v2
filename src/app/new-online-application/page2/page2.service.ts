import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Result {
  status: any
}
@Injectable()
export class Page2Service {
  serviceUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/appPages/';
  constructor(private http: HttpClient) { }
  savePage2(data) {
    return this.http.post < Result>(this.serviceUrl + 'confirm.php', data);
  }
}

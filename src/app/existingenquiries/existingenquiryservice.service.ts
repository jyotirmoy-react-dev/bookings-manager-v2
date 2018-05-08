import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Hotels {
  "id": 0,
  "HName": "",
  "HContact": "",
  "HAddress": "",
  "HPhone": "",
  "HEmail": ""
}
@Injectable()
export class ExistingenquiryserviceService {
  constructor(private http: HttpClient) { }
getHotels(token) {
  return this.http.get<Hotels[]>('https://intense-bastion-97088.herokuapp.com/api/hotel_masters?access_token=' + token);
  }
}

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
  token = 'cPRkdYvPvpfqhsUIerl5jwcoMQ5xXq9dvOwzSBzo14qqvCiODVLHsDJTmOvPPFEi';
  constructor(private http: HttpClient) { }
getHotels() {
  return this.http.get<Hotels[]>('https://intense-bastion-97088.herokuapp.com/api/hotel_masters?access_token=' + this.token);
  }
}

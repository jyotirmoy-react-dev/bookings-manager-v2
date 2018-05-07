import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class HomepageserviceService {

  constructor(private http: HttpClient) { }
  token = 'cPRkdYvPvpfqhsUIerl5jwcoMQ5xXq9dvOwzSBzo14qqvCiODVLHsDJTmOvPPFEi';
  fetchHotelCount() {
    return this.http.get('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/count?access_token=' + this.token);
  }

}

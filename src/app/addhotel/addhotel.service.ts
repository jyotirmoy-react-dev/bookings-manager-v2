import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AddhotelService {

  constructor(private http: HttpClient) { }

  addNewHotel(send_data, token){
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/hotel_masters?access_token=' + token, send_data);
  }

}

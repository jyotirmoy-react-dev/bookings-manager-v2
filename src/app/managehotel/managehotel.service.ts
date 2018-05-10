import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Hoteldetails {
  "id" : '',
  "HName" : "",
  "HContact" : "",
  "HAddress" : "",
  "HLocation" : "",
  "HPhone" : "",
  "HEmail" : "",
  "HCheckin": '',
  "HCheckout": ''
};
@Injectable()
export class ManagehotelService {

  constructor(private http: HttpClient) { }

  getHotelDetails(id,token){
return this.http.get < Hoteldetails > ('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + id + '?access_token=' + token);
  }
  
  updateHotel(id,token,send_data){
    return this.http.put('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + id + '?access_token=' + token, send_data);
  }
  deleteHotel(id, token){
    return this.http.delete('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + id + '?access_token=' + token);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Transports {
  "id": '',
  "TName": ''
}
@Injectable()
export class TransportationService {

  constructor(private http: HttpClient) { }
  saveHotelTransportation(token, send_data) {
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + send_data.HCode +
      '/hotelTransportTariffs?access_token=' + token, send_data);
  }

  getTransportation(token) {
    return this.http.get < Transports[]>('https://intense-bastion-97088.herokuapp.com/api/transport_masters?access_token=' + token);
  }

  getHoteTransport(token, id) {
    return this.http.get('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + id +
      '/hotelTransportTariffs?access_token=' + token);
  }


  delteHotelTransport(send_data, token) {
    return this.http.delete(`https://intense-bastion-97088.herokuapp.com/api/hotel_masters/${send_data.HCode}/hotelTransportTariffs/${send_data.id}?access_token=${token}`);
  }

  deleteTransport(id, token){
    return this.http.delete('https://intense-bastion-97088.herokuapp.com/api/transport_masters/' + id + '?access_token=' + token);
  }

  addTransport(send_data, token){
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/transport_masters?access_token=' + token, send_data);
  }
}

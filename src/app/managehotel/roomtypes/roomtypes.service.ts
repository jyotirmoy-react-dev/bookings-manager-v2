import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Roomtypes{
  'id':'',
  'RName':''
}
@Injectable()
export class RoomtypesService {

  constructor(private http: HttpClient) { }
  saveHotelRoomtype(token, send_data) {
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + send_data.HCode +
      '/hotelRoomTariffTables?access_token=' + token, send_data);
  }

  getRoomtypes(token) {
    return this.http.get<Roomtypes[]>('https://intense-bastion-97088.herokuapp.com/api/room_category_masters?access_token=' + token);
  }

  getHotelRoomtypes(token, id) {
    return this.http.get('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + id +
      '/hotelRoomTariffTables?access_token=' + token);
  }


  delteHotelRoom(send_data, token) {
    return this.http.delete(`https://intense-bastion-97088.herokuapp.com/api/hotel_masters/${send_data.hotelroomid}/hotelRoomTariffTables/${send_data.id}?access_token=${token}`);
  }

  deleteRoom(token, id){
    return this.http.delete('https://intense-bastion-97088.herokuapp.com/api/room_category_masters/' + id + '?access_token=' + token);
  }

  addRoom(token, send_data){
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/room_category_masters?access_token=' + token,send_data);
  }
}

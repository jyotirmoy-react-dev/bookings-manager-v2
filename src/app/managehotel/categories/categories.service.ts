import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Categories {
  'id': '',
  'CName': ''
}
@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(token) {
    return this.http.get<Categories[]>('https://intense-bastion-97088.herokuapp.com/api/category_masters?access_token=' + token);
  }

  getHotelCategories(token,id){
    return this.http.get('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/'+ id + 
    '/hotelCategoryTables?access_token=' + token);
  }
  
  saveHotelCategory(token,send_data){
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/hotel_masters/' + send_data.HCode +
      '/hotelCategoryTables?access_token=' + token,send_data);
  }

  deleteHotelCategory(send_data, token){
    return this.http.delete(`https://intense-bastion-97088.herokuapp.com/api/hotel_masters/${send_data.hotelMasterId}/hotelCategoryTables/${send_data.id}?access_token=${token}`);
  }
  deleteCategory(token, id){
    return this.http.delete('https://intense-bastion-97088.herokuapp.com/api/category_masters/' + id + '?access_token=' + token);
  }

  addCategory(token, send_data){
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/category_masters?access_token=' + token,send_data);
  }
}

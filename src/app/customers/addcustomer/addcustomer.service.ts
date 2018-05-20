import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddcustomerService {

  constructor(private http: HttpClient) { }
  saveCustomer(token,send_data){
    return this.http.post('https://intense-bastion-97088.herokuapp.com/api/clients_masters?access_token=' + token, send_data);
  }

  getCustomerInfo(id,token){
    return this.http.get('https://intense-bastion-97088.herokuapp.com/api/clients_masters/' + id + '?access_token=' + token);
  }
}

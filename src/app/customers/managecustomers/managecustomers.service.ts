import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Customers {
  "CFirstname": "",
  "CLastname": "",
  "CAddress": "",
  "CAddress2": "",
  "CEmail": "",
  "CPhone": "",
  "CCity": "",
  "CState": "",
  "CPin": "",
  "CNGuests": "",
  "CHotel": "",
  "id": 0
}
@Injectable()
export class ManagecustomersService {

  constructor(private http: HttpClient) { }

  getCustomerDetails(token){
    return this.http.get < Customers[] >('https://intense-bastion-97088.herokuapp.com/api/clients_masters?access_token=' + token);
  }
}

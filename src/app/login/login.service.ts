import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

}

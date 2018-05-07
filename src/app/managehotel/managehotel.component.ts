import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator} from '@angular/forms';
@Component({
  selector: 'app-managehotel',
  templateUrl: './managehotel.component.html',
  styleUrls: ['./managehotel.component.css']
})
export class ManagehotelComponent implements OnInit {
  hotelForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  createForm(){
    this.hotelForm = new FormGroup({
      
    });
  }

}

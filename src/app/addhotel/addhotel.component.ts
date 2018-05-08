import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AddhotelService } from './addhotel.service';
import { HomepageserviceService } from '../homepageservice.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  addHotelForm: FormGroup;
  constructor(private hotelservice: AddhotelService, private fetchhome: HomepageserviceService,
    private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
this.setUpForm();
  }

  setUpForm(){
this.addHotelForm = new FormGroup({
      HName: new FormControl('',{
        validators: Validators.required
      }),
      HContact: new FormControl('',{
        validators: Validators.required
      }),
      HLocation: new FormControl('',{
        validators: Validators.required
      }),
      HAddress: new FormControl('',{
        validators: Validators.required
      }),
      HPhone: new FormControl('',{
        validators: Validators.required
      }),
      HEmail: new FormControl('',{
        validators: Validators.required
      })
    });
  }
saveHotel({valid, value}) {
  if(valid){
    const send_data = {
      'HName':value.HName,
      'HContact':value.HContact,
      'HLocation':value.HLocation,
      'HAddress':value.HAddress,
      'HPhone':value.HPhone,
      'HEmail':value.HEmail,
    };
    this.fetchhome.token.subscribe(token=>{
      this.hotelservice.addNewHotel(send_data,token).subscribe(res=>{
        this.snackBar.open('Done !', '', {
          duration: 2000,
        });
          this.router.navigate(['hotels']);
      },
    error=>{
      console.error(error);
    });
    })
  }
  }
}

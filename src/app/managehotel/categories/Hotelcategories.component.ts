import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from './categories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomepageserviceService } from '../../homepageservice.service';

@Component({
  selector: 'app-hotelcategories',
  templateUrl: './Hotelcategories.component.html',
  styles: []
})
export class HotelCategoriesComponent implements OnInit {
  @Input() hid = '';
  catForm: FormGroup;
  categories: any = [];
  token = '';
  Hcategories:any = [];
  constructor(private fetch: CategoriesService,
            private fetchHome: HomepageserviceService) { }

  ngOnInit() {
    this.setupForm();
    this.fetchHome.token.subscribe(token => {
      this.token = token;
      this.getCategories(this.token);
      this.getHotelCat();
    });
  }
  
  getCategories(token){
    this.fetch.getCategories(token).subscribe(res => {
      this.categories = res;
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.fetchHome.unauthUserLogOut();
          }
        });
  }

  getHotelCat(){
    this.fetchHome.showHideLoader(true);
    this.fetch.getHotelCategories(this.token,this.hid).subscribe(res => {
      this.Hcategories = res;
      this.fetchHome.showHideLoader(false);
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.fetchHome.unauthUserLogOut();
          }
        });
  }

  setupForm(){
    this.catForm = new FormGroup({
      selcategory: new FormControl('',{
        validators: Validators.required
      })
    });
  }

  saveCategoryToHotel({valid,value}){
    this.fetchHome.showHideLoader(true);
    const send_data = {
      "HCode": this.hid,
      "CCode": value.selcategory,
      "hotelMasterId": this.hid
    };
    this.fetch.saveHotelCategory(this.token, send_data).subscribe(res => {
      this.getHotelCat();
      
    },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.fetchHome.unauthUserLogOut();
          }
        })
  }

deleteCategory(send_data){
this.fetchHome.showHideLoader(true);
  this.fetch.deleteHotelCategory(send_data,this.token).subscribe(res => {
this.getHotelCat();
  },
        ({ error }) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED') {
            this.fetchHome.unauthUserLogOut();
          }
        });
}

}

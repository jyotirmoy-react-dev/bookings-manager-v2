import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../managehotel/categories/categories.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HomepageserviceService } from '../homepageservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  displayedColumns = ['Category Name', 'Delete'];
  datasource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoryFetch: CategoriesService, private fetchome: HomepageserviceService) { }

  ngOnInit() {
    this.getCategories();
    this.setUpForm();
  }

  ngAfterViewInit(){
    this.datasource.paginator = this.paginator;
  }
  setUpForm(){
    this.categoryForm = new FormGroup({
      CName: new FormControl('',{
        validators: Validators.required
      })
    });
  }
  getCategories(){
    this.fetchome.showHideLoader(true);
    this.fetchome.token.subscribe(token => {
      this.categoryFetch.getCategories(token).subscribe(res => {
        this.datasource.data = res;
        this.fetchome.showHideLoader(false);
      },
      err=>{
        console.error(err);
      });
    })
  }

  deleteCategory(id){
    this.fetchome.showHideLoader(true);
    this.fetchome.token.subscribe(token => {
      this.categoryFetch.deleteCategory(token,id).subscribe(res => {
        this.getCategories();
        this.fetchome.showHideLoader(false);
      },
        err => {
          console.error(err);
        });
    })
  }

  addCategory({valid,value}){
    if(valid){
      const send_data = {
        'CName': value.CName
      };
      this.fetchome.showHideLoader(true);
      this.fetchome.token.subscribe(token => {
        this.categoryFetch.addCategory(token, send_data).subscribe(res => {
          this.getCategories();
          this.fetchome.showHideLoader(false);
          this.setUpForm();
        },
          ({ error }) => {
            if (error.error.code == 'AUTHORIZATION_REQUIRED') {
              this.fetchome.logoutUser();
            }
          });
      });
    }
  }

}

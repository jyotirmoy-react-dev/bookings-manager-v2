import { Component, OnInit, ViewChild,  } from '@angular/core';
import { ExistingenquiryserviceService } from './existingenquiryservice.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { HomepageserviceService } from '../homepageservice.service';
import { CategoriesService } from '../managehotel/categories/categories.service';
@Component({
  selector: 'app-existingenquiries',
  templateUrl: './existingenquiries.component.html',
  styleUrls: ['./existingenquiries.component.css']
})

export class ExistingenquiriesComponent implements OnInit {
  categories = [];
  allHotels = [];
  categorySel = '';
  token = '';
  hotelWithCatgories:any = [];
  displayedColumns = ['Hotel Name', 'Hotel Contact', 'Hotel Address', 'Hotel Phone', 'Hotel Email', 'Hotel Location', 'Create Template'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private fetchData: ExistingenquiryserviceService, private router: Router,
  private fetchhome: HomepageserviceService,
  private categoryS: CategoriesService) { }

  ngOnInit() {
    this.getHotels();
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  startNew(){
    this.router.navigate(['addhotel']);
  }
  getHotels(){
    this.fetchhome.showHideLoader(true);
    this.fetchhome.token.subscribe(token=>{
      this.fetchData.getHotels(token).subscribe(res => {
        this.dataSource.data = res;
        this.allHotels = res;
        this.fetchhome.showHideLoader(false);
        this.getCategories(token);
        this.token = token;
        this.getHotelCategories();
      },
        ({error}) => {
          if (error.error.code == 'AUTHORIZATION_REQUIRED'){
              this.fetchhome.unauthUserLogOut();
          }
        });
    });
  }
  hotelTemplate(id) {
    this.router.navigate(['hoteltemplate',id]);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  getCategories(token){
  this.fetchhome.showHideLoader(true);
    this.categoryS.getCategories(token).subscribe(res =>{
      this.categories = res;
      this.fetchhome.showHideLoader(false);
    })
  }
  
  getHotelCategories(){
    this.fetchData.getHotelByCategories(this.token).subscribe(res => {
        this.hotelWithCatgories = res;
    })
  }


  filterHotels(){
    const category = this.categorySel;
    const hotelWithCatgories = this.hotelWithCatgories;
    const filteredHotels = [];
    let filteredCategories = [];
    if(category)
    {
      const allHotels = this.allHotels;
      console.log(allHotels);
      filteredCategories = hotelWithCatgories.filter((item) => item.CCode == category);
      filteredCategories.filter(cat => {
        allHotels.filter((hotel) => {
          if (hotel.id == cat.HCode) {
            filteredHotels.push(hotel);
          }
        });
      });
      console.log(filteredHotels);
      this.dataSource.data = filteredHotels;
    }
    else{
      this.dataSource.data = this.allHotels;
    }
  }
}

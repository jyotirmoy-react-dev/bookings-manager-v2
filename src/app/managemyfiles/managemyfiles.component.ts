import { Component, OnInit } from '@angular/core';
import { FetchfileserviceService } from '../fetchfileservice.service';
@Component({
  selector: 'app-managemyfiles',
  templateUrl: './managemyfiles.component.html',
  styleUrls: ['./managemyfiles.component.css']
})
export class ManagemyfilesComponent implements OnInit {


  items : Array<any>;
  itemCount = 0;
  constructor(private fetchData: FetchfileserviceService) {

  }

  ngOnInit() {
  }


  getData() {
    this.fetchData.getMyfiles('agreen@nsf.org').subscribe((res:Array<any>) => {

      this.items = res;
      this.itemCount = res.length;
    },
      error => {
        console.error(error);
      });
  }

  
}

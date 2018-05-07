import { Component, OnInit } from '@angular/core';
import { FetchfileserviceService } from '../fetchfileservice.service';
import { Router } from '@angular/router';
import { AppmainserviceService } from './appmainservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-appmain',
  templateUrl: './appmain.component.html',
  styleUrls: ['./appmain.component.css']
})
export class AppmainComponent implements OnInit {
  files: Array<any>;
  displayFiles: Array<any>;
  fetchFiles = true;
  totalFiles = 0;
  initialLoad = 8;
  constructor(private incompleteDetails: FetchfileserviceService,
     private routes: Router, private fetch: AppmainserviceService,
      private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getFiles();
    window.addEventListener('scroll', this.scroll, true);
  }
  startNew(){
    this.routes.navigate(['newonlineapplication','new']);
  }
  getFiles(){
    this.incompleteDetails.getIncompleteFiles('agreen@nsf.org')
      .subscribe(
        (response:any) => {
          this.files = response;
          this.totalFiles = this.files.length;
          this.displayFiles = this.files.slice(0, this.initialLoad);
          this.fetchFiles = false;
        },
        error =>{
          console.error(error);
        }
      )
  }
  deleteApplication(file) {
    let data = new FormData();
    data.append('cancel', file.UNIQUE_APP_ID);
    this.fetch.deleteApp(data).subscribe(res=>{
      this.snackBar.open(res.status,'', {
        duration: 2000,
      });
      this.getFiles();
    });
  }
  scroll = (): void =>{
    this.fetchFiles = true;
    this.initialLoad = this.initialLoad + 3;
    const loadFiles = this.files;
    this.displayFiles = loadFiles.slice(0, this.initialLoad);
    this.fetchFiles = false;
  }
}

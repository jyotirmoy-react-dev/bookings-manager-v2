import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewappserviceService } from '../newappservice.service';

@Component({
  selector: 'app-page-stepper',
  template: `
    <mat-chip-list>
      <mat-chip selected="{{page=='1' || currentPath=='page1' }}" (click)="stepChange('page1','1')" >Page 1</mat-chip>
      <mat-chip selected="{{page=='2' || currentPath=='page2'}}" (click)="stepChange('page2','2')" >Page 2</mat-chip>
      <mat-chip selected="{{page=='3' || currentPath=='page3'}}" (click)="stepChange('page3','3')" >Page 3</mat-chip>
      <mat-chip selected="{{page=='4' || currentPath=='page4'}}" (click)="stepChange('page4','4')" >Page 4</mat-chip>
      <mat-chip selected="{{page=='5' || currentPath=='page5'}}" (click)="stepChange('page5','5')" >Page 5</mat-chip>
      <mat-chip selected="{{page=='6' || currentPath=='page6'}}" (click)="stepChange('page6','6')" >Page 6</mat-chip>
      <mat-chip selected="{{page=='7' || currentPath=='page7'}}" (click)="stepChange('page7','7')" >Page 7</mat-chip>
      <mat-chip selected="{{page=='8' || currentPath=='page8'}}" (click)="stepChange('page8','8')" >Page 8</mat-chip>
      <mat-chip selected="{{page=='9' || currentPath=='page9'}}" (click)="stepChange('page9','9')" >Page 9</mat-chip>
      <mat-chip selected="{{page=='10' || currentPath=='page10'}}" (click)="stepChange('page10','10')" >Page 10</mat-chip>
    </mat-chip-list>
  `,
  styles: []
})
export class PageStepperComponent implements OnInit {
  @Input() page = '3';
  currentPath = '';
  constructor(private routes: Router, private router: ActivatedRoute, private newAppSerice: NewappserviceService) {
    this.router.url.subscribe(res => {
    this.currentPath = res[0].path.toString();
    });
   }

  ngOnInit() {
  }
  stepChange(step,pageId){
        this.newAppSerice.newStep(pageId);
        this.routes.navigate([step], {relativeTo: this.router});
  }
}

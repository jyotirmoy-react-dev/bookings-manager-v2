import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pamsnews',
  templateUrl: './pamsnews.component.html',
  styleUrls: ['./pamsnews.component.css']
})
export class PamsnewsComponent implements OnInit {
  typeNews: string;
  constructor(private router: ActivatedRoute) { 

  }

  ngOnInit() {
    this.router.paramMap.subscribe((res: ParamMap) => {
      this.typeNews = res.get('id');
    });
  }

}

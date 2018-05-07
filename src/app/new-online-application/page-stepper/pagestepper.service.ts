import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PagestepperService {

  constructor(private http: HttpClient) { }

  setUpPageData(page, pageIssue, unique_app_id){
    let data = new FormData();
    data.append('page', page);
    data.append('unique_app_id', unique_app_id);
    switch (pageIssue) {
      case 'page1_issue':
        data.append('page1_issue', 'yes');
        break;
      case 'page2_issue':
        data.append('page2_issue', 'yes');
        break;
      case 'page3_issue':
        data.append('page3_issue', 'yes');
        break;
      case 'page4_issue':
        data.append('page4_issue', 'yes');
        break;
      case 'page5_issue':
        data.append('page5_issue', 'yes');
        break;
      case 'page6_issue':
        data.append('page6_issue', 'yes');
        break;
      case 'page7_issue':
        data.append('page7_issue', 'yes');
        break;
      case 'page8_issue':
        data.append('page8_issue', 'yes');
        break;
      case 'page9_issue':
        data.append('page9_issue', 'yes');
        break;
      case 'page10_issue':
        data.append('page10_issue', 'yes');
        break;
      default:
        break;
    }
    
  }
}

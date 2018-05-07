import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
interface Myfiles {
  passcode:'',
  sample_number:'',
  display:'',
  filestatus:'',
  hasissues:'',
  prod_description:'',
  prod_description_short:'',
  company:'',
  next_step:'',
  title_1:'',
  due_date:'',
  due:'',
  enoQ:'',
  provided_by:'',
  est_value:'',
  contact_email:'',
  email:'',
  extra_contact_access:'',
  unique_app_id:'',
  comments:''
}
@Injectable()
export class FetchfileserviceService {
  myfilesUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/app_track3.php';
  appmainUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/main.php';
  serviceUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/';
  constructor(private http: HttpClient) { }

  getMyfiles(staff_email){
    const send_date = {staff_email:staff_email};
    return this.http.get<Myfiles[]>(this.myfilesUrl)
  }
  getMyApprovedFiles(staff_email){
    const send_date = {staff_email:staff_email};
    return this.http.get<Myfiles[]>(this.myfilesUrl +'?approvals=yes')
  }
  getIncompleteFiles(user_email): Observable<any> {
    const send_data = {'user_email': user_email, 'incomplete_app':'get'};
    return this.http.get(this.appmainUrl +'?incomplete_app=get&user_email=agreen@nsf.org')
  }

  getDueDates(sample){
    return this.http.get(this.serviceUrl + 'app_track3_ajax.php?sample_number=' + sample);
  }
}

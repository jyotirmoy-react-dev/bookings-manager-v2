import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
interface Initialdata {
  'initial_details': any,
  'app_details': any,
  'menu_details': any
}
@Injectable()
export class OnlineappService {
  serviceUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/appPages/';
AppDetails = new BehaviorSubject({
      applicant_address : '',
    application_type : '',
    application_type_issue : '',
    audit : '',
    audit_issue : '',
    company : '',
    company_email : '',
    company_telephone : '',
    contact : '',
    contact_address : '',
    contact_email : 'agreen@nsf.org',
    contact_fax : '',
    contact_mobile : '',
    contact_telephone : '',
    cus_seq : '',
    description : '',
    description_issue : '',
    extra_contact_email : '',
    fax : '',
    locations : '',
    locations_radio : '',
    manufacturer : '',
    manufacturer2 : '',
    manufacturer3 : '',
    manufacturer4 : '',
    manufacturer5 : '',
    manufacturer6 : '',
    manufacturer_address : '',
    manufacturer_address2 : '',
    manufacturer_address3 : '',
    manufacturer_address4 : '',
    manufacturer_address5 : '',
    manufacturer_address6 : '',
    page1_issue : '',
    page2_issue : '',
    page3_issue : '',
    page4_issue : '',
    page5_issue : '',
    page6_issue : '',
    page7_issue : '',
    page8_issue : '',
    page9_issue : '',
    page10_issue : '',
    previous_approval : '',
    previous_approval_issue : '',
    production_stage : '',
    production_stage_issue : '',
    section1 : '',
    section1_issue : '',
    submitted : "0",
    version : '',
    website : '',
  });
  setAppDetails(data) {
    this.AppDetails.next(data);
  }
  getAppDetails(unique_app_id) {
    const data = new FormData();
    data.append('unique_app_id', unique_app_id);
    return this.http.post<Initialdata>(this.serviceUrl + 'page1.php', data);
  }
  constructor(private http: HttpClient) { }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
interface Samples {
  viewValue: '',
  value: ''
}
interface Uniqueid {
  unique_app_id: ''
}
interface Previousapp {
  old_id: '',
  section: '',
  description: '',
  company: '',
  contact: '',
  applicant_address: '',
  contact_address: '',
  contact_telephone: '',
  fax: '',
  contact_mobile: '',
  website: '',
  contact_email: '',
  extra_contact_email: '',
  company_email: '',
  contact_fax: '',
  manufacturer: '',
  manufacturer_address: '',
  manufacturer2: '',
  manufacturer_address2: '',
  manufacturer3: '',
  manufacturer_address3: '',
  manufacturer4: '',
  manufacturer_address4: '',
  manufacturer5: '',
  manufacturer_address5: '',
  manufacturer6: '',
  manufacturer_address6: '',
  approval_temp: '',
  mim_pressure: '',
  max_pressure: '',
  pressure_description: '',
  marking_description: '',
  basic_temp: '',
  general_description: '',
  sub_category: ''
}
@Injectable()
export class NewappserviceService {
  send_data = {};
  unique_app_id = new BehaviorSubject('');
  currentPage = new BehaviorSubject('');
  serviceUrl = 'http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/appPages/';
  constructor(private http: HttpClient) { }
  getSampleNumbers() {
    return this.http.get<Samples[]>(this.serviceUrl + 'open_file.php?getSamples=get');
  }
  newUniqueId(value) {
    this.unique_app_id.next(value);
  }
  newStep(step) {
    this.currentPage.next(step);
  }
  getUniqueAppId() {
    let data = new FormData();
    data.append('new_application', 'new');
    return this.http.post<Uniqueid>(this.serviceUrl + 'open_file.php', data);
  }

  getPreviousAppDetails(sample) {
    let data = new FormData();
    data.append('previous_app', sample);
    return this.http.post<Previousapp>(this.serviceUrl + 'open_file.php', data);
  }

  SetNewApplicationForm(data) {
    return this.http.post(this.serviceUrl + 'open_file.php', data);
  }
  checkUniqueId(): boolean {
    const unique_app_id:any = this.unique_app_id;
    if (unique_app_id != '') {
      return true;
    }
    else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Element {
  id: '',
  estimate_value: '',
  section: '',
  providedby: '',
  company: '',
  contact_name: '',
  contact_email: '',
  quote_description: '',
  document: '',
  succesful: '',
  reason: '',
  applied: '',
  viewed: '',
  time: '',
  contract: '',
  passcode: ''
}
@Injectable()
export class ExistingenquiryserviceService {

  constructor(private http: HttpClient) { }
getDataForNewApps() {
  return this.http.get<Element[]>('http://nsfaaws6.nsf.org/online_application_v2/OnlineAppV3/php/existing_enquiries2.php?get_new_apps=get');
  }
}

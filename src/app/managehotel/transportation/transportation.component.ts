import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomepageserviceService } from '../../homepageservice.service';
import { TransportationService } from './transportation.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styles: []
})
export class TransportationComponent implements OnInit {
  @Input() hid = '';
  transportForm: FormGroup;
  transports: any = [];
  token = '';
  HTransports: any = [];


  constructor(private transportFetch: TransportationService, private home: HomepageserviceService) { }

  ngOnInit() {
    this.setupForm();
    this.home.token.subscribe(token => {
      this.token = token;
      this.getTransports(this.token);
      this.getHotelTransports();
    });
  }

  setupForm() {
    this.transportForm = new FormGroup({
      seltransport: new FormControl('', {
        validators: Validators.required
      }),
      price: new FormControl('', {
        validators: Validators.required
      })
    });
  }

  getTransports(token) {
    this.transportFetch.getTransportation(token).subscribe(res => {
      this.transports = res;
    });
  }

  getHotelTransports() {
    this.home.showHideLoader(true);
    this.transportFetch.getHoteTransport(this.token, this.hid).subscribe(res => {
      this.HTransports = res;
      this.home.showHideLoader(false);
    });
  }

  saveHotelTrasnport({ valid, value }) {
    this.home.showHideLoader(true);
    const send_data = {
      "HCode": this.hid,
      "TCode": value.seltransport,
      "Price": value.price
    };
    this.transportFetch.saveHotelTransportation(this.token, send_data).subscribe(res => {
      this.getHotelTransports();
    });
  }

  deleteTransport(send_data) {
    this.home.showHideLoader(true);
    this.transportFetch.delteHotelTransport(send_data, this.token).subscribe(res => {
      this.getHotelTransports();
    });
  }

}

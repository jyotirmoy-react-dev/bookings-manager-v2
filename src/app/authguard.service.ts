import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NewappserviceService } from './new-online-application/newappservice.service';
import { HomepageserviceService } from './homepageservice.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private fetchhome: HomepageserviceService) {

  }
  
canActivate(next : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
  if (this.fetchhome.checkToken()) {
    return false;
  } else {
    return true;
  }
}
}

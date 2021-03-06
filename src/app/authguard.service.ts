import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomepageserviceService } from './homepageservice.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private fetchhome: HomepageserviceService, private router: Router) {

  }
  
canActivate(next : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
  const redirectUrl = state.url;
  if (this.fetchhome.checkToken()) {
      this.fetchhome.showHideLoader(false);
      this.fetchhome.setUserLogFlag(true);
      return true;
  } else {
    this.router.navigate(['login']);
    
  }
}
}

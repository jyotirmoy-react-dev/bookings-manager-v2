import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomepageserviceService } from './homepageservice.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private fetchhome: HomepageserviceService, private router: Router) {

  }
  
canActivate(next : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
  if (this.fetchhome.checkToken()) {
    return true;
  } else {
    this.router.navigate(['']);
    
  }
}
}

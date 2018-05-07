import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NewappserviceService } from './new-online-application/newappservice.service';

@Injectable()
export class AuthguardService implements CanActivateChild,CanActivate {
  constructor(private checkUniqueId: NewappserviceService) {

  }
  canActivate() {
    return true;
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.checkUniqueId.checkUniqueId){
      return true;
    }
    else{
      return false;
    }
  }

}

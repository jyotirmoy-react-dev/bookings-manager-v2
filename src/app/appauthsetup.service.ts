import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AppauthsetupService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (window.sessionStorage.getItem('token')) {
      const newreq = req.clone({
        headers: req.headers.set('Authorization', window.sessionStorage.getItem('token'))
      });
      return next.handle(newreq);
    }
   else {
      return next.handle(req);
   }
  }

}


/* class Appathorization implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (token) {
      const newReq = req.clone({
        headers: req.headers.set('Authorization',token)
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
 */
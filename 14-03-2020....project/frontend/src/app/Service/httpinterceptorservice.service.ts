import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorserviceService implements HttpInterceptor{

  constructor(public auth : AuthserviceService) { }

  intercept(request : HttpRequest<any> , next: HttpHandler){
    console.log("Inside Inceptor");
    if(this.auth.getAuthenticationToken()){
      let AuthenticationToken = this.auth.getAuthenticationToken();
      request=request.clone({
        setHeaders : {
          Authorization : AuthenticationToken
        }
      });
    }
    return next.handle(request);
  }
}

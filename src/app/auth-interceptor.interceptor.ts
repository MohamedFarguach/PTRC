import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserAuthService } from './Auth/user-auth-service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private userAuthService: UserAuthService,
    private router:Router) {}
    

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.userAuthService.getToken();
      req = req.clone({
          setHeaders: {
              Authorization: "Bearer " + authToken
          }
      });
      return next.handle(req);
  }
}

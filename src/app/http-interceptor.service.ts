import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './Service/login-service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private serviceLogin: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        alert("inercepteur")
        if (this.serviceLogin.isUserLoggedIn() && req.url.indexOf('auth') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${window.btoa(this.serviceLogin.username + ":" + this.serviceLogin.password)}`
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
 }


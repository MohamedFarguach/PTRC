
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'app/Service/login-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
constructor() { }
IsLoggedIn(){
 // alert(localStorage.getItem('authenticatedUser'))
 return !!localStorage.getItem('authenticatedUser');
}

}
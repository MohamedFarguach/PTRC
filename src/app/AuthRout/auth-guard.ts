import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from 'app/AuthServic/auth-service';
import { LoginService } from 'app/Service/login-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth:AuthService,private router : Router,private service:LoginService){

}
canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
   {
    if(this.auth.IsLoggedIn()){
    //  alert("true")

    return true;
  }
 
  this.router.navigate(['login'])
 // alert("false")
  return false
}
/* canActivate(): Promise<boolean> {
  return new Promise((resolve) => {
    this.auth.IsLoggedIn().subscribe((authenticated) => {
      if (!authenticated) {
        this.router.navigate(['/login']);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
} */
}
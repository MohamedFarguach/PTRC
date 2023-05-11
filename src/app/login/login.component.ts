import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/Auth/user-auth-service';
import { LoginService } from 'app/Service/login-service';
import { Login } from 'app/class/login';
import jwt_decode from 'jwt-decode';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

     if(this.userAuthService.isLoggedIn()){
       this.router.navigateByUrl('/dashboard')
   }
  }
  test : Date = new Date();


  username!:string
  password!:string
  message:any
  user:Login = new Login();
 
  
  constructor(public router :Router, private userAuthService: UserAuthService, private userService:LoginService)
    {  }
    getDecodedAccessToken(token: string): any {
      try {
        return jwt_decode(token);
      } catch(Error) {
        return null;
      }
    }
   
  doLoogin() {
    this.userService.login(this.user).subscribe(
        (response: any) => {
          window.localStorage.setItem("role",response.role)
        //  alert(response.role)
          this.userAuthService.setRoles(this.getDecodedAccessToken(JSON.stringify(response)).roles);
          this.userAuthService.setToken(response.accessToken);
  
          
          const role= this.getDecodedAccessToken(JSON.stringify(response)).roles[0]
          console.log( this.getDecodedAccessToken(JSON.stringify(response)).roles[0])
        
        if (response.role === 'ROLE_ADMIN' ) {
            console.log("ana doloogin if admin")
          //  alert("dash")
           this.router.navigate(['/transport']);
         } else {
//          //  this.router.navigate(['/user']);
         }
      if (response.role === 'ROLE_ADMIN' ) {
         console.log("ana doloogin if admin")
        // alert("dash")
          this.router.navigate(['/transport']);
      } else { 
// //         //this.router.navigate(['/user']);
       }
       },
        (error) => {
        console.log(error);
       } 
      );
   }

 }
 





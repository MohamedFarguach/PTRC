import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from 'app/Auth/user-auth-service';
import { Login } from 'app/class/login';
import { URLAPP } from 'app/URLApplications';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${URLAPP}`;

    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
    public username?: String |null;
    public password!: String |null;


 UserAuthService: UserAuthService = new UserAuthService;
 //PATH_OF_API = 'http://localhost:8079';
 requestHeader1 = new HttpHeaders({ 'No-Auth': 'True' });
 requestHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
   constructor(private httpClient :HttpClient) {

   }

     public login(user:Login) {
       console.log(" login ")
      // alert("LoginService ")
       return this.httpClient.post(this.apiUrl+'authenticate', user,{headers:this.requestHeader1}
          );
     }




     public forUser() {
       //console.log("ana f forUser() hhhh")
       return this.httpClient.get(this.apiUrl+'forUser', {
         responseType: 'text',
       });
     }
     public forAdmin() {
       console.log("ana f forAdmin hhhh")
       return this.httpClient.get(this.apiUrl+'forAdmin', {
         responseType: 'text',
       });
     }
     logout() {
       sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
       this.username  = null;
       this.password = null;
     }

     isUserLoggedIn() {
       let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
       if (user === null) return false
       console.log("isUserloggIN")
       return true
     }
     GetToken(){
       return localStorage.getItem('token')!=null?localStorage.getItem('token'):'';

     }

     getLoggedInUserName() {
       let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
       if (user === null) return ''
       console.log("getLoggedInUserName")
       return user
     }
     roleMatch(allwoedRoles: string|any[]):any|undefined{

       let isMatch =false;
       const userRoles:any = this.UserAuthService.getRoles();
     //  console.log(userRoles+"hahowa")
       if (userRoles != null && userRoles) {
       for(let i= 0 ;i < userRoles.length;i++){
         if(userRoles[i]===allwoedRoles[i]){
           isMatch=true;

           return isMatch;
         }else{
           return isMatch;
         }

         }
       }
       }
     }









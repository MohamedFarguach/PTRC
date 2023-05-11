import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

   public setRoles(role: []){
    localStorage.setItem('roles',JSON.stringify(role))
  }
  public getRoles(): []{
  
    
    return JSON.parse(localStorage.getItem('roles')!);
  }
  public setToken(authenticatedUser:string){
    localStorage.setItem('authenticatedUser',authenticatedUser);
  }
  public getToken(): string {
    return localStorage.getItem('authenticatedUser')!;
  }
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }


}

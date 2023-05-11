import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URLAPP } from 'app/URLApplications';

@Injectable({
    providedIn: 'root'
  })
export class User {
    constructor(private httpclient :HttpClient) {

    }
    private apiUrl = `${URLAPP}`;


      registerlistUser(data: any): Observable<any> {
      //  alert("service"+JSON.stringify(data))
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

        return this.httpclient.post<any>(this.apiUrl+'AjouteUser', data);
      }

      modefierUtilisateurs(da: any,id:any): Observable<any> {
        console.log("da"+JSON.stringify(da))
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

        return this.httpclient.put<any>(this.apiUrl+'PutUser/'+id, da,{ headers });
      }
      ListtypeUtilisateurs():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetUser')

      }
      public delettypeUtilisateurs(id:number){

        return this.httpclient.delete(this.apiUrl+'deletUser/'+id)
      }
      public afficheUtilisateursbyid(id:number){
        // alert("service "+id)
         return this.httpclient.get(this.apiUrl+'afficheUser/'+id)
       }
       ListtypeRole():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetRole')

      }

}




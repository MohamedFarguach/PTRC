import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLAPP } from 'app/URLApplications';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private apiUrl = `${URLAPP}`;

    constructor(private httpclient :HttpClient) {

    }


    ajoutelistResponsable(data: any): Observable<any> {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

        return this.httpclient.post<any>(this.apiUrl+'AjouteResponsable', data,);
      }

      modefierlistResponsable(da: any,id:any): Observable<any> {
        console.log("da"+JSON.stringify(da))
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

        return this.httpclient.put<any>(this.apiUrl+'PutResponsable/'+id, da,{ headers });
      }
      ListResponsable():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetResponsable')

      }
      public deleteResponsable(id:number){
       // alert("service "+id)
        return this.httpclient.delete(this.apiUrl+'deleteResponsable/'+id)
      }
      public afficheResponsable(id:number){
        // alert("service "+id)
         return this.httpclient.get(this.apiUrl+'afficheResponsableCharge/'+id)
       }
}



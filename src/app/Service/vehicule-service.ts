

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLAPP } from 'app/URLApplications';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
    constructor(private httpclient :HttpClient) {

    }
    private apiUrl = `${URLAPP}`;


      registerlistVehicule(data: any): Observable<any> {
  //  alert("service"+JSON.stringify(data))
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

        return this.httpclient.post<any>(this.apiUrl+'AjouteVehicule', data);
      }
      ListVehicule():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetVehicule')

      }
      ListVehiculeFindById(id:any):Observable<any>{
        return this.httpclient.get(this.apiUrl+'afficheVehicule/'+id)

      }
      ListVehiculeByTypeId(id:any):Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetVehiculeByTypeId/'+id)

      }
      public deletplistvehicule(id:number){
       // alert("service "+id)
        return this.httpclient.delete(this.apiUrl+'deletVehicule/'+id)
      }
      modefierlistvehicule(da: any,id:any): Observable<any> {
        console.log("da"+JSON.stringify(da))
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

        return this.httpclient.put<any>(this.apiUrl+'PutVehicule/'+id, da,{ headers });
      }

}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URLAPP } from 'app/URLApplications';

@Injectable({
    providedIn: 'root'
  })
export class TypeVehiculeService {
  private apiUrl = `${URLAPP}`;

    constructor(private httpclient :HttpClient) {

    }


    ajoutelisttypevehicule(data: any): Observable<any> {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

        return this.httpclient.post<any>(this.apiUrl+'AjouteTypeVehicule', data,);
      }

      modefierlisttypevehicule(da: any,id:any): Observable<any> {
        console.log("da"+JSON.stringify(da))
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

        return this.httpclient.put<any>(this.apiUrl+'PutTypeVehicule/'+id, da,{ headers });
      }
      GetTypeVehicule():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetTypeVehicule')

      }
      public deleteTypeVehicule(id:number){
       // alert("service "+id)
        return this.httpclient.delete(this.apiUrl+'deleteTypeVehicule/'+id)
      }
      public afficheTypeVehicule(id:number){
        // alert("service "+id)
         return this.httpclient.get(this.apiUrl+'afficheTypeVehicule/'+id)
       }
}



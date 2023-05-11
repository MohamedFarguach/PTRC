import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLAPP } from 'app/URLApplications';

@Injectable({
  providedIn: 'root'
})
export class TypeLieuxService {
  private apiUrl = `${URLAPP}`;

    constructor(private httpclient :HttpClient) {

    }


    ajoutelisttypelieux(data: any): Observable<any> {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

        return this.httpclient.post<any>(this.apiUrl+'AjouteTypelieux', data,);
      }

      modefierlisttypelieux(da: any,id:any): Observable<any> {
        console.log("da"+JSON.stringify(da))
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

        return this.httpclient.put<any>(this.apiUrl+'PutTypelieux/'+id, da,{ headers });
      }
      Listtypelieux():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetTypelieux')

      }
      public delettypelieux(id:number){
       // alert("service "+id)
        return this.httpclient.delete(this.apiUrl+'deletTypelieux/'+id)
      }
      public affichetypelieuxbyid(id:number){
        // alert("service "+id)
         return this.httpclient.get(this.apiUrl+'afficheTypelieux/'+id)
       }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URLAPP } from 'app/URLApplications';

@Injectable({
  providedIn: 'root'
})
export class LieuxService {
  private apiUrl = `${URLAPP}`;

    constructor(private httpclient :HttpClient) {

    }


    registerlistLieux(data: any): Observable<any> {
        //  alert("service"+JSON.stringify(data))
              const headers = new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

              return this.httpclient.post<any>(this.apiUrl+'AjouteLieux', data);
            }
            ListLieux():Observable<any>{
              return this.httpclient.get(this.apiUrl+'GetLieux')

            }
            ListTypeLieux():Observable<any>{
              return this.httpclient.get(this.apiUrl+'GetTypelieux')

            }
            afficherLieuxById(id:any):Observable<any>{
              return this.httpclient.get(this.apiUrl+'afficheLieux/'+id)

            }
            public deletLieux(id:number){
             // alert("service "+id)
              return this.httpclient.delete(this.apiUrl+'deletLieux/'+id)
            }
            modefierlistLieux(da: any,id:any): Observable<any> {
              console.log("da"+JSON.stringify(da))
             // alert("da"+JSON.stringify(da))
              const headers = new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
              .set('Access-Control-Allow-Origin','*')
              .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

              return this.httpclient.put<any>(this.apiUrl+'PutLieux/'+id, da,{ headers });
            }

}

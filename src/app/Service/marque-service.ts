import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLAPP } from 'app/URLApplications';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private apiUrl = `${URLAPP}`;

    constructor(private httpclient :HttpClient) {

    }

    ajoutelistMarquer(data: any): Observable<any> {
        return this.httpclient.post<any>(this.apiUrl+'AjouteMarque', data,);
      }
      modefierlistMarque(da: any,id:any): Observable<any> {

        return this.httpclient.put<any>(this.apiUrl+'PutMarque/'+id, da);
      }
      ListMarque():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetMarque')

      }
      public deletMarque(id:number){
         return this.httpclient.delete(this.apiUrl+'deletMarque/'+id)
       }
       ListMarqueFindById(id:any):Observable<any>{
        return this.httpclient.get(this.apiUrl+'afficheMarque/'+id)

      }
}

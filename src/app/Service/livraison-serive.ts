import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URLAPP } from 'app/URLApplications';

@Injectable({
  providedIn: 'root'
})
export class LivraisonSerive {
  private apiUrl = `${URLAPP}`;

    constructor(private httpclient :HttpClient) {

    }


    ajoutelistlivraison(data: any): Observable<any> {
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'));

        return this.httpclient.post<any>(this.apiUrl+'AjouteLigneLivraison', data);
      }
      Listlivraison():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetLigneLivraison')

      }
    modefierlistlivraison(da: any,id:any,fileid:any): Observable<any> {
        console.log("da"+JSON.stringify(da))
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer '+window.localStorage.getItem('authenticatedUser'))
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

        return this.httpclient.put<any>(this.apiUrl+'PutLigneLivraison/'+id+'/file/'+fileid, da,{ headers });
      }
      FindByIdlivraison(id:any):Observable<any>{
        return this.httpclient.get(this.apiUrl+'affichelivraison/'+id)

      }

      uploadFile(file: File) {
        const formData = new FormData();
        formData.append('file', file, file.name);

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.httpclient.post(this.apiUrl+'upload', formData, { headers });
      }
      ModefierFile(file: File,fileid:number) {

        const formData = new FormData();
        formData.append('file', file, file.name);

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.httpclient.put(this.apiUrl+'upload/'+fileid, formData, { headers });
      }
      ListChantier():Observable<any>{
        return this.httpclient.get(this.apiUrl+'GetChantier')

      }

  getData(id: number): Observable<ArrayBuffer> {
    return this.httpclient.get(this.apiUrl+`bytes/${id}`, { responseType: 'arraybuffer' });
  }
      getBytes(id: number): Observable<HttpResponse<ArrayBuffer>> {
        alert(id)
        const headers = new HttpHeaders().set('Accept', 'application/octet-stream');
        return this.httpclient.get(this.apiUrl+`bytes/${id}`, { headers: headers, observe: 'response', responseType: 'arraybuffer' });
      }

      public deletlivraison(id:number){
       // alert("service "+id)
        return this.httpclient.delete(this.apiUrl+'deletLigneLivraison/'+id)
      }
      public deletfile(id:number){
        // alert("service "+id)
         return this.httpclient.delete(this.apiUrl+'deletfile/'+id)
       }

}

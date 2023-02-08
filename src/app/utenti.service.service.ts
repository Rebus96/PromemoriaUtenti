import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utenti} from "./utenti";

@Injectable({
  providedIn: 'root'
})
export class UtentiServiceService {
  private url = "http://localhost:3306/springboot-crud-rest/utenti/utente"

  constructor(private http: HttpClient){}
  getUtentiList(): Observable<any>{
  return this.http.get("${this.url}");
}
 getUtente(id: number): Observable<any>{
  return this.http.get ("${this.url}/${id}");
}
 creaUtenti(utenti: Utenti): Observable<any>{
  return this.http.post("${this.url}", utenti);
}
 deteteUtenti (ide: number){
  return this.http.delete("${this.url}/${id}");
}
}

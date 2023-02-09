import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Utente} from "./utente";


@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {
  private url = `http://localhost:3306/springboot-crud-rest/utenti/utente`

  constructor(private http: HttpClient) {
  }

  getUtenteList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getUtente(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  creaUtente(utenti: Utente): Observable<any> {
    return this.http.post(`${this.url}`, utenti);
  }

  deteteUtente(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

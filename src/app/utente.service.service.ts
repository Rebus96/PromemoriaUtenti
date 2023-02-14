import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Utente} from "./utente";


@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {
  private url = `http://localhost:8080/utenti`;

  constructor(private http: HttpClient) {
  }

  getUtenteList(): Observable<any> {
    return this.http.get(`${this.url}/utente`);
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
  updateUtente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

}

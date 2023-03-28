import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Utente} from "./utente";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";


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
    return this.http.get(`${this.url}/utente/${id}`);
  }

  creaUtente(utente: Utente): Observable<any> {
    return this.http.post(`${this.url}/utente`, utente);
  }

  deteteUtente(id: number) {
    return this.http.delete(`${this.url}/utente/${id}`);
  }

  search(name: string): Observable<Utente[]> {
    let params = new HttpParams().set('filter', name);
    return this.http.get<Utente[]>(`${this.url}/utente/search/${name}`, {params: params});
  }

  getPage(page: number, size: number, sort: boolean): Observable<any>{
    let params = new HttpParams().set('page', page).set('size', size).set('sortDirection', sort);
    return this.http.get(`${this.url}/utente/page`, {params: params})
  }

}

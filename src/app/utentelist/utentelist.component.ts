import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Utente} from "../utente";
import {UtenteServiceService} from "../utente.service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-utentelist',
  templateUrl: './utentelist.component.html',
  styleUrls: ['./utentelist.component.scss']
})
export class UtentelistComponent implements OnInit{
  utente: Observable<Utente[]>;

  constructor(private es: UtenteServiceService,
              private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.utente = this.es.getUtenteList();
}
 deleteUtente(id: number){
    this.es.deteteUtente(id).subscribe((a:any)=>{
      this.reloadData();
    })
 }



}

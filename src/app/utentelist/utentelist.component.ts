import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Utente} from "../utente";
import {UtenteServiceService} from "../utente.service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-utentelist',
  templateUrl: './utentelist.component.html',
  styleUrls: ['./utentelist.component.scss']
})
export class UtentelistComponent implements OnInit{
  utente: Observable<Utente[]>;

  constructor(private route: ActivatedRoute, private router: Router, private es: UtenteServiceService) {}
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
 dettagliUtente(id: number){
    this.router.navigate(['dettagli', id]);
 }



}

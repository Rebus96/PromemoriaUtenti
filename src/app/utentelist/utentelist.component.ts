import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Utente} from "../utente";
import {UtenteServiceService} from "../utente.service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-utentelist',
  templateUrl: './utentelist.component.html',
  styleUrls: ['./utentelist.component.scss']
})
export class UtentelistComponent implements OnInit {
  //utente: Observable<Utente[]>;
  listaUtenti: Utente[];
  //id: number;

  constructor(private route: ActivatedRoute, private router: Router, private es: UtenteServiceService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.es.getUtenteList().subscribe((arr) => {
      console.log(arr);
      this.listaUtenti = arr;
    });
  }

  deleteUtente(id: number) {
    this.es.deteteUtente(id).subscribe((a: any) => {
      this.reloadData();
    })
  }

  dettagliUtente(id: number) {
    this.router.navigate(['/dettagliutente']);
  }


}

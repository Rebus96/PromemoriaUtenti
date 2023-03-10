import {Component, OnInit} from '@angular/core';
import {Utente} from "../utente";
import {UtenteServiceService} from "../utente.service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-crea-utenti',
  templateUrl: './crea-utenti.component.html',
  styleUrls: ['./crea-utenti.component.scss']
})
export class CreaUtentiComponent implements OnInit {
  utente: Utente = new Utente();
  submitted = false;



  constructor(private route: ActivatedRoute, private es: UtenteServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  newUtente(): void {
    this.submitted = false;
    this.utente = new Utente();
  }

  save() {
    this.es.creaUtente(this.utente).subscribe(() => {
      this.gotoList();
    });

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private gotoList() {
     console.log("CIAO CIAO CIAO");
    this.router.navigate(['/utente']);

  }


}

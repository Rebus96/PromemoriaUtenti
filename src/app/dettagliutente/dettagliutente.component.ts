import {Component, OnInit} from '@angular/core';
import {Utente} from "../utente";
import {ActivatedRoute, Router} from "@angular/router";
import {UtenteServiceService} from "../utente.service.service";

@Component({
  selector: 'app-dettagliutente',
  templateUrl: './dettagliutente.component.html',
  styleUrls: ['./dettagliutente.component.scss']
})
export class DettagliutenteComponent implements OnInit {
  id: number;
  utente: Utente;

  constructor(private route: ActivatedRoute,private router: Router,
              private es: UtenteServiceService) { }
  ngOnInit() {
    this.utente = new Utente();

    this.id = this.route.snapshot.params['id'];

    this.es.getUtente(this.id).subscribe((res)=>{

      this.utente = res;
    });

    }

  gotoList(){
    this.router.navigate(['utente']);
  }
}



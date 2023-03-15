import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UtenteServiceService} from "../utente.service.service";
import {Utente} from "../utente";

@Component({
  selector: 'app-filtri',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.scss']
})
export class OrdineComponent implements OnInit {
  firstname: string;
  listaUtenti: Utente[];

  constructor(private route: ActivatedRoute, private router: Router, private es: UtenteServiceService) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.es.getPage(0, 5,true).subscribe(size => {
      console.log("cacca")
      console.log(size)
      this.listaUtenti = size.content;
    })
  }
  findByOrderByFirstname() {
      this.reloadData()
  }
  deleteUtente(id: number) {
    this.es.deteteUtente(id).subscribe((a: any) => {
      this.reloadData();
    })

  }

  ordineUtente() {
    this.router.navigate(['utente'])

  }
}

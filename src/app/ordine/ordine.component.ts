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
    this.es.findAllByOrderByFirstname().subscribe((arr)=>{
      console.log(arr);
      this.listaUtenti = arr;
    })
  }
  findByOrderByFirstname() {
    this.es.findAllByOrderByFirstname().subscribe((a: any) => {
      this.reloadData();
    })
  }
  deleteUtente(id: number) {
    this.es.deteteUtente(id).subscribe((a: any) => {
      this.reloadData();
    })

  }
  listautenti(){
    this.router.navigate(['filtri'])
  }


  ordineUtente() {
    this.router.navigate(['utente'])

  }
}

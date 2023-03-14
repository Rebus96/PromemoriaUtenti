import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Utente} from "../utente";
import {UtenteServiceService} from "../utente.service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {PagingConfig} from "../pagingConfig";

@Component({
  selector: 'app-utentelist',
  templateUrl: './utentelist.component.html',
  styleUrls: ['./utentelist.component.scss']
})
export class UtentelistComponent implements OnInit {
  inputValue: string = '';
  filteredOptions: string [] ;
  listaUtenti: Utente[];
  tmp: boolean = false;
  firstname: string;
  page: number = 1;
  size: number = 5;
  tableSize: number[] = [2,5,10];

  pagingConfig: PagingConfig = {} as PagingConfig;


  constructor(private route: ActivatedRoute, private router: Router, private es: UtenteServiceService) {
    this.pagingConfig = {
      size: this.size,

    }
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
    });
  }

  dettagliUtente(id: number) {
    this.router.navigate(['dettagliutente', id]);
  }
  ordineUtenti(){
    this.router.navigate(['ordine']);}


  onChange(value: string): void {
      this.es.search(value).subscribe(list => {
        this.filteredOptions = list.map(utente => utente.firstname);

      });
    }
  getPage(value: number){
    this.es.getPage(value, this.pagingConfig.size).subscribe(size =>{

    })
  }
  onTableSizeChange(event:any): void {
    this.pagingConfig.size = event.target.value;
    this.getSize(0);
  }
  getSize(value: number){
    this.es.getPage(value, this.pagingConfig.size).subscribe(size =>{
          console.log("cacca")
      console.log(size)
      this.listaUtenti = size.content;
    })
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtentelistComponent} from "./utentelist/utentelist.component";
import {CreaUtentiComponent} from "./crea-utente/crea-utenti.component";
import {DettagliutenteComponent} from "./dettagliutente/dettagliutente.component";
import {FiltriComponent} from "./filtri/filtri.component";

const routes: Routes = [
  {path: '', redirectTo: 'addutente', pathMatch: 'full'},
  {path: 'addutente', component: CreaUtentiComponent},
  {path: 'utente', component: UtentelistComponent},
  {path: 'dettagliutente/:id', component: DettagliutenteComponent},
  {path: 'filtri', component: FiltriComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

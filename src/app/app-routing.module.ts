import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtentelistComponent} from "./utentelist/utentelist.component";
import {CreaUtentiComponent} from "./crea-utente/crea-utenti.component";
import {DettagliutenteComponent} from "./dettagliutente/dettagliutente.component";
import {OrdineComponent} from "./ordine/ordine.component";

const routes: Routes = [
  {path: '', redirectTo: 'addutente', pathMatch: 'full'},
  {path: 'addutente', component: CreaUtentiComponent},
  {path: 'utente', component: UtentelistComponent},
  {path: 'dettagliutente/:id', component: DettagliutenteComponent},
  {path: 'ordine', component: OrdineComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

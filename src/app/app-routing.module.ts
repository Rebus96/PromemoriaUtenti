import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtentelistComponent} from "./utentelist/utentelist.component";
import {CreaUtentiComponent} from "./crea-utente/crea-utenti.component";
import {DettagliutenteComponent} from "./dettagliutente/dettagliutente.component";

const routes: Routes = [
  {path: '', redirectTo: 'addutente', pathMatch: 'full'},
  {path: 'addutente', component: CreaUtentiComponent},
  {path: 'utente', component: UtentelistComponent},
  {path: 'dettagliutente', component: DettagliutenteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

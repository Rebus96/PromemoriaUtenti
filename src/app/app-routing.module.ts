import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtentelistComponent} from "./utentelist/utentelist.component";
import {CreaUtentiComponent} from "./crea-utente/crea-utenti.component";
import {DettagliutenteComponent} from "./dettagliutente/dettagliutente.component";
import {OrdineComponent} from "./ordine/ordine.component";
import {AutocompleteComponent} from "angular-ng-autocomplete";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  {path: '', redirectTo: 'addutente', pathMatch: 'full'},
  {path: 'addutente', component: CreaUtentiComponent},
  {path: 'utente', component: UtentelistComponent},
  {path: 'dettagliutente/:id', component: DettagliutenteComponent},
  {path: 'ordine', component: OrdineComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'sign-in', component: SignInComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

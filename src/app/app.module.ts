import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Utente} from "./utente";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CreaUtentiComponent } from './crea-utente/crea-utenti.component';
import { UtentelistComponent } from './utentelist/utentelist.component';
import {FormsModule, NgModel} from "@angular/forms";
import { DettagliutenteComponent } from './dettagliutente/dettagliutente.component';
import { OrdineComponent } from './ordine/ordine.component';

@NgModule({
  declarations: [
    AppComponent,
    CreaUtentiComponent,
    UtentelistComponent,
    DettagliutenteComponent,
    OrdineComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

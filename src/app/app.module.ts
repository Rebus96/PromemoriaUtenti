import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CreaUtentiComponent } from './crea-utente/crea-utenti.component';
import { UtentelistComponent } from './utentelist/utentelist.component';
import {FormsModule, NgModel} from "@angular/forms";
import { DettagliutenteComponent } from './dettagliutente/dettagliutente.component';
import { OrdineComponent } from './ordine/ordine.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NgxPaginationModule} from "ngx-pagination";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "./environments/environment.prod";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';


registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    CreaUtentiComponent,
    UtentelistComponent,
    DettagliutenteComponent,
    OrdineComponent,
    DashboardComponent,
    SignInComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzAutocompleteModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,




  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

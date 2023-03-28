import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AuthloginServiceService {
userData: any; //salva i dati dell'utente che effettua l'accesso        //NgZone è un servizio che viene iniettato per eseguire all'interno e allesterno di Angular
 //salva i dati dell'utente quando è connesso e metti valore nullo quando è disconnesso
  constructor(private http: HttpClient, public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public Ngzone: NgZone) {
    this.afAuth.authState.subscribe(user =>{
      if (user){
        this.userData = user;
        localStorage.setItem('user',JSON.stringify(user));
        JSON.parse(localStorage.getItem('user'))}//memorizza key, converti formato, analizza formato e leggi key
        else{
          localStorage.setItem('user', null); JSON.parse(localStorage.getItem('user')); //memorizza key, analizza formato, leggi key
        }
    })
  }
  // accesso tramite email e password
  SignIn(email: string, password: string){
    this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
      this.userData =result.user;
      localStorage.setItem('user',JSON.stringify(this.userData));
      this.afAuth.authState.subscribe((user)=>{
        if (user)
        this.router.navigate(['addutente']);
      })
    })

  }

}

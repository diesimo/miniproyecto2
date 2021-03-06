import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  

  constructor(private afAuth: AngularFireAuth) { }

  async logGoogle(): Promise<firebase.User> {
    try{
      const res = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const { user } = res;
      localStorage.setItem('user', user.uid);
      return user;}
      catch (err) {
      console.log(err);
      localStorage.removeItem('user');
      return null;
    }
  }
 /*  
  @param email
  @param password*/
 /* async signInWithEmail(
    email:String,
    password: String,
    ): Promise<firebase.User> {
      try{
        const res = await this.afAuth.signInWithEmailAndPassword(email, password);
        const res { user } = res;
        localStorage.setItem('user', user.uid);
        return user;
      } catch (err) {
        console.log(err);
        localStorage.removeItem('user');
        return null;
      }*/
    
    
  }

  



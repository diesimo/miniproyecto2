import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

//Imports from Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './environments/environment';
import firebase from 'firebase/app'
import { auth } from 'firebase/firebase-auth';
import 'firebase/auth';
//Imports from HttpModule




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    NavbarComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import HttpClientModule
    HttpClientModule,

    // Inject Modules in Angular
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    auth,
    firebase,
  ],
  providers: [
   // {provide: StorageBucket, useValue: 'gs://miniproyecto2-74fb4.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

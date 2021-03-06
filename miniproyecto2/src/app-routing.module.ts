import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrarseComponent} from './components/registrarse/registrarse.component'
import {HomeComponent} from './components/home/home.component'
import {PeliculasComponent} from './components/peliculas/peliculas.component'
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registrarse', component:RegistrarseComponent},
  {path:'peliculas', component: PeliculasComponent},
  {path:'', component: HomeComponent, pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

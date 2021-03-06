import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../movies.service';
import {Pelis} from '../../app/pelis.interface'
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.sass']
})
export class PeliculasComponent implements OnInit {

  peliss: Pelis[];
  constructor( private dataPelis:MoviesService) { }

  ngOnInit(): void {
    console.log(this.dataPelis.getPeli().subscribe());
    this.dataPelis.getPeli().subscribe(data=> console.log(this.peliss=data));
  }

}

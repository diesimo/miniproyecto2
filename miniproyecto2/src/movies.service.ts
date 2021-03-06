import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import {Pelis} from './app/pelis.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "299c00f1ba671f53a95c7a2975a9d4dc";
  private urlMovies: string = "https://api.themoviedb.org/3/discover/movie?api_key=299c00f1ba671f53a95c7a2975a9d4dc&pages=";
  numero=1;

  constructor(private http: HttpClient) { }

   //Estos son los metodos de busquedad para usar la url de The Movie DB 

   getPeli():Observable<Pelis[]>{
     return this.http.get<Pelis[]>(this.urlMovies+this.numero);
   }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getQueryforPelicula(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "");
  }

  getDiscoverMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(
      map((data: any) => data.results)
    );
  }

  getPelicula(id: string) {
    return this.getQueryforPelicula(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

  getBusquedaPeliculas(termino: string) {
    return this.getQuery(
      `/search/movie?query=${termino}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }

   // Otra alternativa para hacer la peticion
  /*   getDiscoverMovies() {
  const url = `${
    this.urlMoviedb
  }/discover/movie?sort_by=popularity.desc&api_key=${
    this.apikey
  }&language=es&callback=JSONP_CALLBACK`;
  return this.http.jsonp(url, "").pipe(map((res: any) => res.results));
} */

options: {
/*headers?: HttpHeaders | {[header: string]: string | string[]},*/
  observe?: 'body' | 'events' | 'response',
  /*params?: HttpParams|{[param: string]: string | string[]},*/
  reportProgress?: boolean,
  responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
}
}

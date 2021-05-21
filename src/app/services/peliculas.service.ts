import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { tap, map, catchError } from 'rxjs/operators'
import { MovieResponce } from '../interfaces/movie-responce';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'f25556d73d7d325f7bf23275064e65d3',
      languaje: 'en-US',
      page: this.carteleraPage.toString()
    }
      
  }
  resetcarteleraPage() {
    this.carteleraPage = 1;
  }

  getcartelera(): Observable<CarteleraResponse> {
    console.log('cargando api')

    if (this.cargando) {
      //cargando pelicula
      return;
    }
    
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`, { params: this.params }).pipe(
      tap(() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }
  buscarPaliculas(texto:string): Observable<Movie[]> {

    const params = {...this.params, pages: '1', query: texto}
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, { params }).pipe(map(resp =>  resp.results) )

  }
  getpeliculadetalle(id: string) {
    return this.http.get<MovieResponce>(`${this.baseUrl}/movie/${id}`, { params: this.params }).pipe(
      catchError(err => of(null))
    )
  }
  // va a emitir un cast pero de tipo arreglo
  getCast(id: string):Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, { params: this.params }).pipe(
      map(resp => resp.cast),
      catchError(err => of([]))
    )
  

  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { MovieResponce} from 'src/app/interfaces/movie-responce';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { CreditsResponse, Cast } from 'src/app/interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  public pelicula: MovieResponce;
  //inicializalo vacio para que siempre tenga un valor
  public cast: Cast[] = []; // [] por que es un listado ****

  constructor(private activatedRoute: ActivatedRoute, private service: PeliculasService, private location: Location, private router: Router) { }
  
  
  ngOnInit(): void {

    //destructuring de los parametros
    //cuando tengamos mas ragumentos traidos del params
    const { id } = this.activatedRoute.snapshot.params;
    
    //rjx para convinar obsebables y quede mas corto
    combineLatest([
      //revibe una cantidad indefinida de oberbables
      this.service.getpeliculadetalle(id),

    this.service.getCast(id)

    ]).subscribe(([pelicula, cast]) => {
      //regresa un objeto, con las respuestas de los oberbables cuando han emitido un valor
      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return; // para que no haga anda mas
      }
      
      this.pelicula = pelicula;

      this.cast = cast.filter( actor => actor.profile_path !== null)

      
    })
    
    //^^^^^^^^^
// esto funcioa exactamente igual que lo de arriba
    
/*     //informacion de la pelicula
    this.service.getpeliculadetalle(id).subscribe(movie => {
      //si la pelicula es null
      if (!movie) {
        this.router.navigateByUrl('/home');
        return; // para que no haga anda mas
      }
     
      this.pelicula = movie;
      
    });
    
    //obtememos el cast
    this.service.getCast(id).subscribe(cast => {
      console.log(cast);
      this.cast = cast.filter( actor => actor.profile_path !== null)
      
    }) */

    



    //obtener el casting
  }

  regresar() {
    this.location.back();
  
}

}

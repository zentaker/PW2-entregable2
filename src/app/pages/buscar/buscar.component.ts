import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public texto: string = '';
  public movies: Movie[] = [];

  constructor(private activatedRoutes: ActivatedRoute, private service: PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params => {
      this.texto = params.texto;
      //TODO: llamar al servicio
      this.service.buscarPaliculas(params.texto).subscribe(movies => {
        this.movies = movies;

        
      })

    } ) 
  }

}

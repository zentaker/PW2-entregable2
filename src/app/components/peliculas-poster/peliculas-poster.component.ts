import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.css']
})
export class PeliculasPosterComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.movies)
  }
  onMovieClick(movie: Movie) {
    
    this.router.navigate(['/pelicula', movie.id])

  }

}

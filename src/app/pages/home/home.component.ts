import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  
 
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1900;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    if (pos > max) {
      //TODO: llamar al servicio

      if (this.service.cargando) {
        return;
        
      }
      this.service.getcartelera().subscribe(resp => {
        this.movies.push(...resp.results);
       
        
      })
    }
    
  }

  constructor(private service: PeliculasService, private router:Router) {
  


  }

  ngOnInit(): void {
    this.service.getcartelera().subscribe(
      resp => {
        //console.log(resp.results);
        this.movies = resp.results;
        this.moviesSlideShow = resp.results
        console.log('arreglo')
        console.log(this.movies[1])
      }

      
    )
  
  }
  ngOnDestroy() {
    //cuando el componente va a ser destruido
    this.service.resetcarteleraPage();

  }
  buscarPelicula(texto: string) {

    texto = texto.trim(); //para borrar los espacios adelante y atras
    if (texto.length === 0) {
      return;
    }
    console.log(texto);

    this.router.navigate(['/buscar', texto]);
    
  }


}

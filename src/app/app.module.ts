import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PeliculasPosterComponent } from './components/peliculas-poster/peliculas-poster.component';
import { RatingModule } from 'ng-starrating';
import { PosterPipe } from './pipes/poster.pipe';
import { CastSlidesowComponent } from './components/cast-slidesow/cast-slidesow.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterComponent,
    PosterPipe,
    CastSlidesowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

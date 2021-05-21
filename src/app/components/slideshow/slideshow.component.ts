import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
// import Swiper core and required modules
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[];
  public swiper: Swiper;

  constructor() { }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
     
      loop: true,
    
    
    });

  }

  ngOnInit(): void {
    //console.log(this.movies)
  }
  onSlideNext() {
    this.swiper.slideNext();

  }
  onSlidePrev() {
    this.swiper.slidePrev();

  }


}

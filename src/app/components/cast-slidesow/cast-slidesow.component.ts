import {  Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slidesow',
  templateUrl: './cast-slidesow.component.html',
  styleUrls: ['./cast-slidesow.component.css']
})
export class CastSlidesowComponent implements OnInit {
  public swiper: Swiper;

  @Input() cast: Cast[];

  constructor() { }
 

  ngOnInit(): void {
    //console.log(this.cast);
  }
  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}

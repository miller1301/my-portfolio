import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {register} from 'swiper/element/bundle';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    register();
  }

  swiperNextPrev( eventButton: string ) {
    const swiperEl: any = document.querySelector('swiper-container')!;
    const swiperSlide = swiperEl.swiper
    eventButton === 'prev' ? swiperSlide.slidePrev() : swiperSlide.slideNext()
  }
  

}

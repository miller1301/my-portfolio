import { Component, AfterViewInit } from '@angular/core';
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

}

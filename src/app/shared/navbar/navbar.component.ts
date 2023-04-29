import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('navbar') navbar!: ElementRef;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    const scrollPos = window.scrollY;
    if (scrollPos > 100) {
      console.log('pos');
      this.navbar.nativeElement.classList.add('bg-dark');
    } else {
      console.log('pos2');
      this.navbar.nativeElement.classList.remove('bg-dark');
    }
  }

  constructor() {}

}

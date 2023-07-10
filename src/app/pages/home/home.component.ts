import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('textName', { static: true }) textName!: ElementRef;

  typedName: string = '';
  textToType: string = 'ROBERT FOX';


  ngOnInit(): void {
    this.startTyping();
  }

  // Type Name on main banner
  startTyping() {
    setTimeout(() => {
      const textLength = this.textToType.length;
      let currentIndex = 0;
  
      const typingInterval = setInterval(() => {
        this.typedName += this.textToType[currentIndex];
        currentIndex++;
  
        if( currentIndex === textLength ) {
          clearInterval(typingInterval);
        }
      }, 100)
    }, 100);
  }

}

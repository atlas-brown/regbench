import { Component } from '@angular/core';
import { HardSlideIn, ContactInner } from './right-component-slidein/hard-slide-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    HardSlideIn(0),
    ContactInner(0)
  ]
})
export class AppComponent {
  shown = 'in';

  trigger(){
    this.shown = this.shown === 'out' ? 'in' : 'out';
  }

}

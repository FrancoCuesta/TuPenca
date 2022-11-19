import { Component } from '@angular/core';
import { NavComponent } from './component/nav/nav.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [NavComponent],

})
export class AppComponent {
  title = 'TuPenca';
  [x: string]: any;
  isLogged = false;
}

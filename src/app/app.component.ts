import { Component, ElementRef ,OnInit,ViewChild } from '@angular/core';

declare var paypal:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;
  
  title = 'TuPenca';

  public ngOnInit(){
    paypal.Buttons().render(this.paypalElement.nativeElement);

  }
}

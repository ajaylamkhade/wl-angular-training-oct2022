import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ajay\'s search-films';
  orderReference='ABCXYZ'
  price: number=17.3

  get fixedPrice(){
    return this.price.toFixed(2);
  }
  constructor(){
    console.log("App Component added by Ajay")
  }
}

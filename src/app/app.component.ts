import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Actividad 1';

  inp;
  
  changeInput(text) : void {
    this.inp = text;
  }
  
}

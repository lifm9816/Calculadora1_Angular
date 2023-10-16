import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora 2';


  resultado: number;
  
  procesarOperacion(resultado: number)
  {
    this.resultado = resultado;
  }
}

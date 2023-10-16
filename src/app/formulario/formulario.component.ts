import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  @Output() resultadoSuma = new EventEmitter<number>();

  operador1: number;
  operador2: number;

  suma()
  {
    let resultado = this.operador1 + this.operador2;
    this.resultadoSuma.emit(resultado);
  }
}

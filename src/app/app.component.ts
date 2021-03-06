import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 0
  paso: number = 1
  base: number = 5

  acumular(valor: number) {
    this.numero += valor
  }

  sumar() {
    this.numero++
  }

  restar() {
    this.numero--
  }
}

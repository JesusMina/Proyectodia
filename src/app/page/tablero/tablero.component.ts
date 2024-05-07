import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
  palabra!: string;
  palabras = [
    'perro', 'barco', 'lacio', '´perro', 'carro', 'tierra', 'tomar', 'vivir'
  ];
  letras: any[] = [];
  nivelDificultad: string = 'facil'; // Por defecto, nivel fácil
  intentosPermitidos: number = 8; // Número de intentos permitidos para nivel fácil
  intentosRestantes: number = 8; // Número de intentos restantes

  constructor() {}

  ngOnInit(): void {
    this.seleccionarPalabra();
  }

  seleccionarPalabra(): void {
    let random = 0;
    do {
      random = Math.floor(Math.random() * this.palabras.length);
    } while (!this.palabras[random]);
    
    this.palabra = this.palabras[random];
    this.letras = this.palabra.split('');
    this.establecerIntentosPermitidos();
  }

  establecerIntentosPermitidos(): void {
    switch (this.nivelDificultad) {
      case 'facil':
        this.intentosPermitidos = 8;
        break;
      case 'normal':
        this.intentosPermitidos = 6;
        break;
      case 'dificil':
        this.intentosPermitidos = 3;
        break;
      default:
        this.intentosPermitidos = 8; // Por defecto, nivel fácil
    }
    this.intentosRestantes = this.intentosPermitidos; // Restablecer los intentos restantes
  }

  cambiarNivelDificultad(nivel: string): void {
    this.nivelDificultad = nivel;
    this.seleccionarPalabra();
  }

  decrementarIntentos(): void {
    this.intentosRestantes--;
    if (this.intentosRestantes === 0) {
      // Aquí puedes manejar el juego perdido
    }
  }
}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.sass']
})
export class CeldaComponent {
  @Input() palabra!: string;
  @Input() letra!: string;
  opcion: string = '';
  css: string = '';

  verificar() {
    if (this.opcion === this.letra) {
      this.css = 'acierto';
    } else if (this.opcion.trim() !== '' && this.palabra.includes(this.opcion)) {
      this.css = 'present';
    } else if (this.opcion.trim() === '') {
      this.css = ''; // Restablecer el estado de CSS cuando la opción se borra
    } else {
      this.css = 'absent';
    }
  }
}

import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.sass']
})
export class FilaComponent {
  @Input() palabra!: string
  @Input() letras!: any[]
  celdas = [1, 2, 3, 4, 5]

}

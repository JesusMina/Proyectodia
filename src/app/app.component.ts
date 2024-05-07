import { Component, OnInit } from '@angular/core';
import { PalabraService } from './services/palabra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'La-Palabra';
  palabraDelDia: string = '';

  constructor(private palabraService: PalabraService) {}

  ngOnInit(): void {
    this.palabraService.getPalabras().subscribe(
      (data: any) => {
        this.palabraDelDia = data.palabra;
      },
      (error) => {
        console.error('Error al obtener la palabra del día:', error);
      }
    );
  }
}

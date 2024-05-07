import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './page/tablero/tablero.component';
import { CasillasComponent } from './component/casillas/casillas.component';
import { FilaComponent } from './component/fila/fila.component';
import { CeldaComponent } from './component/celda/celda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    CasillasComponent,
    FilaComponent,
    CeldaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

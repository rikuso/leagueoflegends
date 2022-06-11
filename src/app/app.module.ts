import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

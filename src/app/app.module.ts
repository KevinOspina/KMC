import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PrincipalComponent } from './Componentes/Principal/principal/principal.component';
import { InicioComponent } from './Componentes/Inicio/inicio/inicio.component';
import { HeaderComponent } from './Componentes/Header/header/header.component';
import { FooterComponent } from './Componentes/Footer/footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

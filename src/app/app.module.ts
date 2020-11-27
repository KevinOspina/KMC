import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PrincipalComponent } from './Componentes/Principal/principal/principal.component';
import { InicioComponent } from './Componentes/Inicio/inicio/inicio.component';
import { HeaderComponent } from './Componentes/Header/header/header.component';
import { FooterComponent } from './Componentes/Footer/footer/footer.component';
import { HomeComponent } from './Componentes/Home/home/home.component'
import { appRountingProviders, routing } from './app.routing';
import { ServicesComponent } from './Componentes/Services/services/services.component';
import { ErrorComponent } from './Componentes-extra/Error/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRountingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

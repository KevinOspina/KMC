import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule, Router } from '@angular/router'


//Componentes para rutas
import {HomeComponent} from './Componentes/Home/home/home.component';
import {ServicesComponent} from './Componentes/Services/services/services.component';
//import {ErrorComponent} from './Componentes-Extra/Error/error/error.component';
import {InicioComponent} from './Componentes/Inicio/inicio/inicio.component'
//Array de rutas
const appRountes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:nombre/:usuario', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'init', component:InicioComponent},
  //{path: '**', component: ErrorComponent}
];



export const appRountingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRountes);


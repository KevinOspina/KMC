import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  constructor() {

    this.titulo = "Bienvenido";


  }

  //Componente iniciado
  ngOnInit(): void {

  }

  ngDoCheck(){

  }
  //Avisa si un componente va a ser eliminado de la vista
  ngOnDestroy(){

  }

  cambiarTitulo(){
    this.titulo = "nuevo titulo"
  }

}



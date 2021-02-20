import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombre: string
  public usuario: string

  constructor(private _route: ActivatedRoute,
    private _router: Router) {

  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.usuario = params.usuario;

    })
  }

}

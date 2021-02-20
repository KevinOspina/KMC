import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public nombre: string
  public usuario: string

  constructor(private _route: ActivatedRoute,
    private _router: Router) {

  }


  ngOnInit(): void {
  }

  redirect_login(){
    this._router.navigate(['/home'])//nombre, usuario concatenado con comas para redireccionar
  }

}

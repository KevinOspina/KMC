import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerName: string;
  constructor() {
    this.headerName = "KMC Proyect"
  }

  ngOnInit(): void {
  }

}

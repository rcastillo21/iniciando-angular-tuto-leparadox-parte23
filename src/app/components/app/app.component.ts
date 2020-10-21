import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _data: DataService,
    private _router: Router
  ) {}

  title = 'parte23';
  links = ['Inicio', 'Login', 'Perfil'];
  activeLink = this.links[0];
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  
  constructor(
    private _data: DataService,
    private _fb: FormBuilder
  ) { 
    this.loginForm = this._fb.group({
      user: ['rubencastle', Validators.compose([Validators.required, Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(20)])]
    })
  }

  iniciarSesion({user, password}): void{
    console.log(user, password);
    if(user == 'rubencastle' && password == '1234') {
      alert('Inicio de Sesión Correcto.!');
      this._data.logueado = true;
    }
    else {
      alert('Datos Incorrectos.!');
      this._data.logueado = false;
    }
  }
}

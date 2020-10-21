import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DeauthGuard implements CanDeactivate<PerfilComponent> {

  constructor(
    private _data: DataService
  ) {}

  canDeactivate(
    component: PerfilComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(!this._data.hasBeenModified) {
      return confirm('Datos sin Guardar, Desea Salir?');
    }
    else {
      return true;
    }
  }
  
}

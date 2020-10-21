import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  logueado:boolean = false;

  hasBeenModified = false;
}

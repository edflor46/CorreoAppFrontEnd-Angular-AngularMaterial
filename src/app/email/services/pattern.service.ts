import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
 /* -------------------------------------------------------------------------- */
  /*                                   Pattern                                  */
  /* -------------------------------------------------------------------------- */
  public nombre        : string = '([a-zA-Z ]+)';
  public asunto        : string = '([a-zA-Z ]+)';
  public destinatario  : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public mensaje       : string = '/^[^$%&|<>#]*$/';
 
  constructor() { }
}

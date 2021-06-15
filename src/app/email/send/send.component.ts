import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { PatternService } from '../services/pattern.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styles: [],
})
export class SendComponent implements OnInit {
  /*=========LOAD==========*/
  load:boolean = false;
  /*==========RES==========*/
  resp:any;

  /*==========FORM GROUP===========*/
  sendCorreo: FormGroup;
  constructor(
    private fb: FormBuilder,
    private correoService: ServiceService,
    private pattern: PatternService,
    private _snackBar: MatSnackBar,
    private router:Router
  ) {
    /*==========VALIDACIONES==========*/
    this.sendCorreo = this.fb.group({
      destinatario : [''.trim(), [Validators.required, Validators.pattern(this.pattern.destinatario)]],
      asunto       : [''.trim(), [Validators.required, Validators.minLength(4), Validators.pattern(this.pattern.asunto)]],
      nombre       : [''.trim(), [Validators.required, Validators.minLength(4), Validators.pattern(this.pattern.nombre)]],
      msg          : [''.trim(), [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}


  /* -------------------------------------------------------------------------- */
  /*                                   ERRORES                                  */
  /* -------------------------------------------------------------------------- */

  errorInput(input:string){
    return this.sendCorreo.get(input).invalid && this.sendCorreo.get(input).touched;
  }

  /* -------------------------------------------------------------------------- */
  /*                                 SEND CORREO                                */
  /* -------------------------------------------------------------------------- */
  enviar() {
    const data =  this.sendCorreo.value;
    this.correoService.sendMail(data).subscribe(resp => {
      this.load = true;
      this._snackBar.open('Mensaje enviado exitosamente', 'Cerrar', {
        duration: 3000
      });
      
      this.router.navigateByUrl('./home');
    })
    
  }
}

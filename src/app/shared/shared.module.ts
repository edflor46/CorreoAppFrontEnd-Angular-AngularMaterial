import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '../material/material.module';

import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';




@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent,
    DialogComponent,
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ], 
  exports: [
    NavComponent,
    SpinnerComponent,
    DialogComponent
   
  ]
})
export class SharedModule { }

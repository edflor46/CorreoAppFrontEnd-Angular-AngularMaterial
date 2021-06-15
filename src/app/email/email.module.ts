import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { SendComponent } from './send/send.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetEmailComponent } from './get-email/get-email.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    SendComponent,
    GetAllComponent,
    GetEmailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmailModule { }

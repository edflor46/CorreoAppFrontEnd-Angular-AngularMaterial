import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { SendComponent } from './send/send.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetEmailComponent } from './get-email/get-email.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    SendComponent,
    GetAllComponent,
    GetEmailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }

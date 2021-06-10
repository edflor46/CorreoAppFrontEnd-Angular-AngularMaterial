import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './send/send.component';
import { GetAllComponent } from './get-all/get-all.component';
import { GetEmailComponent } from './get-email/get-email.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home'      ,  component: HomeComponent },
      { path: 'send'      ,  component: SendComponent },
      { path: 'emails'    ,  component: GetAllComponent },
      { path: 'email/:id' ,  component: GetEmailComponent },
      { path: '**'        , redirectTo: 'home' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor(private route:Router){}

send(){
  this.route.navigateByUrl('/send');
}

getAll(){
  this.route.navigateByUrl('/emails')
}

about(){
    console.log('about');
    
  }
  



}

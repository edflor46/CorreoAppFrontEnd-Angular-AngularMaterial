import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-get-email',
  templateUrl: './get-email.component.html',
  styles: [],
})
export class GetEmailComponent implements OnInit {

  mail: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mailService: ServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMail();
    
  }
  
  /* -------------------------------------------------------------------------- */
  /*                                  GET MAIL                                  */
  /* -------------------------------------------------------------------------- */
  
  getMail(){
    const { id } = this.activatedRoute.snapshot.params;
    this.mailService.getMail(id).subscribe(mail => {
      if (mail) {
        this.mail = mail;        
      }
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                    BACK                                    */
  /* -------------------------------------------------------------------------- */
  back() {
    this.location.back();
  }
}

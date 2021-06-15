import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Correo, Paginator } from '../interfaces/correos.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styles: [],
})
export class GetAllComponent implements OnInit {
  
  loading:boolean = false;

  /*==========BACKEND==========*/
  correos     : Correo[] = [];
  paginator   : Paginator;
  
  /*==========PAGINATION==========*/
  totalItems  :number;
  itemsPerPage:number;
  p:number;
  constructor(private sv: ServiceService, private router:Router) {}
  
  ngOnInit(): void {
      this.loading = true;
    /*==========GET MAILS==========*/
    this.sv.getMails(1).subscribe(resp => {
      this.correos = resp.correos.reverse();
      this.itemsPerPage = resp.paginator.perPage;
      this.totalItems = resp.paginator.total;
      this.p = resp.paginator.currentPage;
      this.loading = false;
    })
    
  }

 /* -------------------------------------------------------------------------- */
 /*                                 PAGINATION                                 */
 /* -------------------------------------------------------------------------- */
  getPage(page:number){
    this.sv.getMails(page).subscribe(mails => {
      this.correos = mails.correos.reverse();
      this.loading = false;
    });

  }

  /* -------------------------------------------------------------------------- */
  /*                                  GO EMAIL                                  */
  /* -------------------------------------------------------------------------- */
  goEmail(id:string){
    this.router.navigate(['./email', id]);
  }
  
  /* -------------------------------------------------------------------------- */
  /*                                   GO SEND                                  */
  /* -------------------------------------------------------------------------- */
  goSend(){
    this.router.navigate(['./send']);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  constructor(private route: Router, public dialog: MatDialog) {}
  /* -------------------------------------------------------------------------- */
  /*                                    SEND                                    */
  /* -------------------------------------------------------------------------- */
  send() {
    this.route.navigateByUrl('/send');
  }
  /* -------------------------------------------------------------------------- */
  /*                                   GET ALL                                  */
  /* -------------------------------------------------------------------------- */
  getAll() {
    this.route.navigateByUrl('/emails');
  }

  /* -------------------------------------------------------------------------- */
  /*                                    ABOUT                                   */
  /* -------------------------------------------------------------------------- */
  about() {
    const dialog = this.dialog.open(DialogComponent);
  }
}

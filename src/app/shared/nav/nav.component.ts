import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {
  
  options: FormGroup;

  constructor(fb: FormBuilder, public dialog: MatDialog) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 55
    });
  }

  ngOnInit(): void {
  }
/* -------------------------------------------------------------------------- */
/*                                  GO ABOUT                                  */
/* -------------------------------------------------------------------------- */
goAbout() {
  const dialog = this.dialog.open(DialogComponent);
}

}

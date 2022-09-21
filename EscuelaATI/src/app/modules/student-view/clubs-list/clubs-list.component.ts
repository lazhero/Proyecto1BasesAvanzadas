import {Component} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
/**
 * @title Drag&Drop disabled sorting
 */
@Component({
  selector: 'clubs-list-component',
  templateUrl: './clubs-list.component.html',
  styleUrls: ['./clubs-list.component.css'],
})
export class ClubsListComponent {

  constructor(private dialog : MatDialog){}
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }
}


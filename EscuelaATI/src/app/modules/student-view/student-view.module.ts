import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentViewRoutingModule } from './student-view-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ClubsListComponent } from './clubs-list/clubs-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    ClubsListComponent,
    DialogComponent
  ],
  
  imports: [
    CommonModule,
    StudentViewRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap:[ClubsListComponent]
})
export class StudentViewModule { }

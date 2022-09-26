import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewRoutingModule } from './admin-view-routing.module';
import { ClubsTableComponent } from './clubs-table/clubs-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { TopClubsComponent } from './top-clubs/top-clubs.component';
import { BottomClubsComponent } from './bottom-clubs/bottom-clubs.component';
import { TotalClubsComponent } from './total-clubs/total-clubs.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TopStudentsComponent } from './top-students/top-students.component';


@NgModule({
  declarations: [
    ClubsTableComponent,
    TopClubsComponent,
    BottomClubsComponent,
    TotalClubsComponent,
    TopStudentsComponent
  ],
  imports: [
    CommonModule,
    AdminViewRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewRoutingModule } from './admin-view-routing.module';
import { ClubsTableComponent } from './clubs-table/clubs-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { TopClubsComponent } from './top-clubs/top-clubs.component';
import { BottomClubsComponent } from './bottom-clubs/bottom-clubs.component';
@NgModule({
  declarations: [
    ClubsTableComponent,
    TopClubsComponent,
    BottomClubsComponent
  ],
  imports: [
    CommonModule,
    AdminViewRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class AdminViewModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsListComponent } from './clubs-list/clubs-list.component';

const routes: Routes = [
  {path:'clubs',component:ClubsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentViewRoutingModule { }

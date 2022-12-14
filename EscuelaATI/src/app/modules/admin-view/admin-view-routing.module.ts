import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomClubsComponent } from './bottom-clubs/bottom-clubs.component';

import { TopClubsComponent } from './top-clubs/top-clubs.component';
import { TopStudentsComponent } from './top-students/top-students.component';
import { TotalClubsComponent } from './total-clubs/total-clubs.component';

const routes: Routes = [
  {path:'top',component:TopClubsComponent},
  {path:'bottom',component:BottomClubsComponent},
  {path:'total',component:TotalClubsComponent},
  {path:'topStudents',component:TopStudentsComponent},
  {path:'', redirectTo:'total', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }

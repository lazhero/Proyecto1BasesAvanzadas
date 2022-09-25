import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsListComponent } from './clubs-list/clubs-list.component';

const routes: Routes = [
  {path:'clubs',component:ClubsListComponent},
  {path:'',redirectTo:'clubs',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentViewRoutingModule { }

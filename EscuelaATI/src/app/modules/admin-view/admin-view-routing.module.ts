import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomClubsComponent } from './bottom-clubs/bottom-clubs.component';

import { TopClubsComponent } from './top-clubs/top-clubs.component';

const routes: Routes = [
  {path:'top',component:TopClubsComponent},
  {path:'bottom',component:BottomClubsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }

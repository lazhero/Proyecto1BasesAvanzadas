import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopClubsComponent } from './top-clubs/top-clubs.component';

const routes: Routes = [
  {path:'top',component:TopClubsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule { }

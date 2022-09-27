import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth', loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'student',loadChildren:()=>import('./modules/student-view/student-view.module').then(m=>m.StudentViewModule)},
  {path:'admin',loadChildren:()=>import('./modules/admin-view/admin-view.module').then(m=>m.AdminViewModule)},
  {path:'',redirectTo:'auth',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

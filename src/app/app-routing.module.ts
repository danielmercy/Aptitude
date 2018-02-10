import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AuthGaurd } from "./core/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'user/:uid',
    component: UserProfileComponent,
    // canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

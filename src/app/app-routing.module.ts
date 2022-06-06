import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { UpcominglaunchListComponent } from './components/upcominglaunch-list/upcominglaunch-list.component';
import { UpcominglaunchDetailsComponent } from './components/upcominglaunch-details/upcominglaunch-details.component';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'launch-list', component: LaunchListComponent, canActivate: [AuthGuard] },
  { path: 'launch-details/:id', component: LaunchDetailsComponent, canActivate: [AuthGuard] },
  { path: 'upcominglaunch-list', component: UpcominglaunchListComponent, canActivate: [AuthGuard] },
  { path: 'upcominglaunch-details/:id', component: UpcominglaunchDetailsComponent, canActivate: [AuthGuard] },
  { path: 'crew-list', component: CrewListComponent, canActivate: [AuthGuard] },
  { path: 'crew-details/:id', component: CrewDetailsComponent, canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'resetpassword', component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{
	path : 'alerts',
	component : LoginComponent
},
{
	path : 'dashboard',
	component : DashboardComponent
},
{
	path : 'alert',
	component : AlertComponent
},
{
	path : 'history',
	component : HistoryComponent
},
{
	path : 'login',
	component : LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

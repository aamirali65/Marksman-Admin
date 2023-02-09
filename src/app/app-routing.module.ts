import { FutsalComponent } from './components/futsal/futsal.component';
import { LoginComponent } from './components/login/login.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BadmintonComponent } from './components/badminton/badminton.component';
import { GelBlasterComponent } from './components/gel-blaster/gel-blaster.component';
import { IndoorCricketComponent } from './components/indoor-cricket/indoor-cricket.component';
import { PaintballComponent } from './components/paintball/paintball.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'Paintball', component: PaintballComponent },
  { path: 'Indoor-cricket', component: IndoorCricketComponent },
  { path: 'Gel-Blaster', component: GelBlasterComponent },
  { path: 'Badminton', component: BadmintonComponent },
  { path: 'Reports', component: ReportsComponent },
  { path: 'Add-User', component: AdduserComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Futsal', component: FutsalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

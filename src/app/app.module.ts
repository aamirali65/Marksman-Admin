import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { PaintballComponent } from './components/paintball/paintball.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FormsModule, FormGroup,ReactiveFormsModule  } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { IndoorCricketComponent } from './components/indoor-cricket/indoor-cricket.component';
import { GelBlasterComponent } from './components/gel-blaster/gel-blaster.component';
import { BadmintonComponent } from './components/badminton/badminton.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { LoginComponent } from './components/login/login.component';
import { FutsalComponent } from './components/futsal/futsal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    UserComponent,
    PaintballComponent,
    HeaderComponent,
    IndoorCricketComponent,
    GelBlasterComponent,
    BadmintonComponent,
    ReportsComponent,
    AdduserComponent,
    LoginComponent,
    FutsalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    
   
  ],
 
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

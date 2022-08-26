import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './accounts/components/login/login.component';
import { SignUpComponent } from './accounts/components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APILoggerService } from './services/apiLogger.service';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DevicesModule } from './devices/devices.module';
import { ProjectsModule } from './projects/projects.module';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementService } from './services/useManagementService.service';
import { UtiltiyModule } from './utiltiy/utiltiy.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    MainDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DevicesModule,
    ProjectsModule,
    HttpClientModule,
    UtiltiyModule,
  ],
  exports: [LoginComponent, SignUpComponent],
  providers: [
    { useClass: APILoggerService, provide: 'logger' },
    UserManagementService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

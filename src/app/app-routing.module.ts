import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/components/login/login.component';
import { SignUpComponent } from './accounts/components/sign-up/sign-up.component';
import { DevicePanelComponent } from './devices/components/device-panel/device-panel.component';
import { HomeComponent } from './home/home.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ProjectPanelComponent } from './projects/component/project-panel/project-panel.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserCanDeactivate } from './services/user.deactivate.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signUp', component: SignUpComponent },
    ],
  },
  {
    path: 'main/:activeUser',
    component: MainDashboardComponent,
    canActivate: [AuthGuard],
    canDeactivate: [UserCanDeactivate],
    children: [
      {
        path: 'project',
        component: ProjectPanelComponent,
      },
      { path: 'device', component: DevicePanelComponent },
      {
        path: 'sme',
        loadChildren: () => import('./sme/sme.module').then((m) => m.SmeModule),
      },
    ],
  },
  { path: 'signUp', component: SignUpComponent },
]; // state configuration;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

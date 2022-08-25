import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserManagementService } from './useManagementService.service';
@Injectable({
  providedIn: 'root', // Auto provider registration
})
export class AuthGuard implements CanActivate {
  constructor(
    private userMangementService: UserManagementService,
    private router: Router
  ) {}
  canActivate() {
    if (!this.userMangementService.loggedStatus) {
      this.router.navigate(['/home']);
      window.alert('Please login');
      return false;
    }
    return true;
  }
}

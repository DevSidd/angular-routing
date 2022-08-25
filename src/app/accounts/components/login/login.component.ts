import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogWriter } from 'src/app/services/iLogger.contract';
import { UserManagementService } from 'src/app/services/useManagementService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(
    @Inject('logger') private logger: ILogWriter,
    private userManagementService: UserManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login(form: FormGroup) {
    this.logger.write(form.value.usernameEditControl);
    this.userManagementService
      .loginAuthenticate(
        form.value.usernameEditControl,
        form.value.passwordEditControl
      )
      .subscribe((data: any) => {
        this.userManagementService.setLoggedIn(data);
        if (data) {
          this.router.navigate(['/main', this.username]);
        } else {
          window.alert("User name doesn't exist");
        }
      });
  }
  clearForm(form: FormGroup) {
    form.reset();
    this.logger.write('Login form value cleared');
  }
}

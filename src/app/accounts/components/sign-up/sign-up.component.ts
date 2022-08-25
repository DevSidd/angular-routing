import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogWriter } from 'src/app/services/iLogger.contract';
import { UserManagementService } from 'src/app/services/useManagementService.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  userName: string = '';
  password: string = '';
  email: string = '';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor(
    @Inject('logger') private logger: ILogWriter,
    private userManagementService: UserManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signUp(form: FormGroup): void {
    this.logger.write(form.value);
    this.userManagementService
      .signUpService(
        form.value.usernameFieldControl,
        form.value.passwordFieldControl,
        form.value.emailFieldControl
      )
      .subscribe((data: any) => {
        this.logger.write(data.registerMessage);
        if (data && data['registerMessage']) {
          this.router.navigate(['/home']);
          this.logger.write(data['registerMessage']);
        }
      });
  }
  clearForm(form: FormGroup) {
    form.reset();
  }
}

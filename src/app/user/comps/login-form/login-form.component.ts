import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormService } from '../../services/login-form.service';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private mixPanel: MixpanelService,
    private fb: FormBuilder,
    public LoginFormService: LoginFormService
  ) {}

  form!: FormGroup;
  type: string = 'signup';
  loading: boolean = false;

  ngOnInit() {
    this.mixPanel.track('Login Page View');
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  changeType(val: any) {
    this.type = val;
  }

  get isLogin() {
    return this.type == 'login';
  }

  get isSignUp() {
    return this.type == 'signup';
  }

  get isPasswordReset() {
    return this.type == 'reset';
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit() {
    this.mixPanel.track('Registered User');
    const email = this.email?.value;
    if (this.type === 'signup' || this.type === 'login') {
      this.LoginFormService.sendEmailLink(email);
    } else if (this.type === 'reset') {
    }
  }
}

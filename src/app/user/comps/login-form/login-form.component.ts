import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginFormService } from '../../services/login-form.service';
// import { Router } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public LoginFormService: LoginFormService,
    private router: Router
  ) {}

  form!: FormGroup;
  type: string = 'signup';
  loading: boolean = false;
  // serverMessage: string | unknown;

  ngOnInit() {
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
    const email = this.email?.value;
    if (this.type === 'signup' || this.type === 'login') {
      this.LoginFormService.sendEmailLink(email);
    } else if (this.type === 'reset') {
    }
  }
}
/* */

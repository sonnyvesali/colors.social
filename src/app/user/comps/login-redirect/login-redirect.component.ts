import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from '../../services/login-form.service';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login-redirect.component.scss'],
})
export class LoginRedirectComponent implements OnInit {
  constructor(public router: Router, public loginService: LoginFormService) {}

  ngOnInit(): void {
    const url = this.router.url;

    this.loginService.confirmSignIn(url);
  }
}

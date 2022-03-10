import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormService } from 'src/app/user/services/login-form.service';
import { DeleteProfileService } from '../../services/delete-profile.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss'],
})
export class DeleteAccountComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public loginService: LoginFormService,
    public router: Router,
    public DeleteAccount: DeleteProfileService
  ) {}

  deleteAccountForm!: FormGroup;
  Email!: string | null;

  ngOnInit(): void {
    const url = this.router.url;
    this.loginService.confirmSignIn(url);

    this.deleteAccountForm = this.fb.group({
      confirmEmail: ['', Validators.required],
    });
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.Email = user.email;
      }
    });
  }

  get email() {
    return this.deleteAccountForm.get('confirmEmail');
  }
}

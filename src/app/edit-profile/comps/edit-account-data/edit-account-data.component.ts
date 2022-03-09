import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFormService } from 'src/app/user/services/login-form.service';
import { EditNameAndEmailService } from '../../services/edit-name-and-email.service';

@Component({
  selector: 'app-edit-account-data',
  templateUrl: './edit-account-data.component.html',
  styleUrls: ['./edit-account-data.component.scss'],
})
export class EditAccountDataComponent implements OnInit {
  ChangeEmailForm!: FormGroup;
  ChangeNameForm!: FormGroup;
  serverMessage!: unknown;
  oldEmail!: any;
  EmailSent = false;
  url!: any;

  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    public loginService: LoginFormService,
    public router: Router,
    public EditNameAndEmail: EditNameAndEmailService
  ) {}

  ngOnInit(): void {
    const url = this.router.url;

    this.loginService.confirmSignIn(url);

    this.ChangeEmailForm = this.fb.group({
      oldEmail: ['', [Validators.required], Validators.email],
      newEmail: ['', [Validators.required, Validators.email]],
    });
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.oldEmail = user.email;
      }
    });
  }

  get email() {
    return this.ChangeEmailForm.get('newEmail');
  }

  // onNameChangeSubmit() {
  //   this.afAuth.authState.subscribe((user) => {
  //     try {
  //       this.af.doc(`users/${user?.uid}`).update({ name: this.name?.value });
  //     } catch (err) {
  //       this.snack.CreateSnackNotification(`${err}`, '');
  //     }
  //   });
  // }
}

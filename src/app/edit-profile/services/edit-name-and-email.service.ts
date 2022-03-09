import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActionCodeSettings } from 'firebase/auth';
import { SnackService } from 'src/app/services/snackbar/snack.service';

@Injectable({
  providedIn: 'root',
})
export class EditNameAndEmailService {
  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFirestore,
    public snack: SnackService
  ) {}

  email!: string;

  emailSent: boolean = false;
  serverMessage!: any;

  async sendEmailLink() {
    const user = await this.afAuth.currentUser;

    const actionCodeSettings: ActionCodeSettings = {
      url: 'http://localhost:4200/edit-profile/change-email',
      handleCodeInApp: true,
    };
    try {
      this.emailSent = true;
      this.afAuth.sendSignInLinkToEmail(
        user?.email as string,
        actionCodeSettings
      );
      window.localStorage.setItem('emailForSignIn', user?.email as string);
      this.snack.CreateSnackNotification('Check your Email :)', '');
    } catch (err) {
      this.serverMessage = err;
    }
  }

  changeEmail(email: any) {
    this.afAuth.authState.subscribe((user) => {
      user?.verifyBeforeUpdateEmail(email?.value).then(() => {
        this.af.doc(`users/${user.uid}`).update({ email: email?.value });
      });
    });
  }

  changeName(name: any) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.af.doc(`users/${user.uid}`).update({ name: name });
      }
    });
  }
}

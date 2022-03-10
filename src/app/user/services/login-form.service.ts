import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ActionCodeSettings } from 'firebase/auth';
import { Observable } from 'rxjs';
import { SnackService } from 'src/app/services/snackbar/snack.service';
@Injectable({
  providedIn: 'root',
})
export class LoginFormService {
  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    private router: Router,
    private snackService: SnackService
  ) {}

  url!: any;
  serverMessage: string | unknown;
  loading = false;
  user!: Observable<any>;
  email: string = '';
  emailSent = false;

  async sendEmailLink(email: string) {
    this.email = email;

    const actionCodeSettings: ActionCodeSettings = {
      url: 'http://localhost:4200/user/new-user',
      handleCodeInApp: true,
    };
    try {
      this.afAuth.sendSignInLinkToEmail(email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      this.emailSent = true;
      this.snackService.CreateSnackNotification('Check your Email :)', '');
    } catch (err) {
      this.serverMessage = err;
    }
  }

  async confirmSignIn(url: string) {
    let email = window.localStorage.getItem('emailForSignIn');
    try {
      if (await this.afAuth.isSignInWithEmailLink(url)) {
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }
        await this.afAuth.signInWithEmailLink(email as string, url).then(() => {
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              this.af
                .doc(`users/${user.uid}`)
                .ref.get()
                .then((docsnap) => {
                  if (!docsnap.exists) {
                    this.af
                      .doc(`users/${user.uid}`)
                      .set({
                        userUID: user.uid,
                        profileCreated: false,
                        email: user.email,
                      })
                      .then(() => {
                        this.router.navigate(['/user', 'register']);
                        // window.localStorage.removeItem('emailForSignIn');
                      });
                  } else {
                    this.router.navigate(['/']);
                    window.localStorage.removeItem('emailForSignIn');
                  }
                });
            }
          });
        });
      }
    } catch (err) {
      this.serverMessage = err;
    }
  }

  forgotPass(email: string) {
    try {
      this.afAuth.sendPasswordResetEmail(email);
      this.serverMessage = 'Check your email';
    } catch (err) {
      this.serverMessage = err;
    }
  }
}

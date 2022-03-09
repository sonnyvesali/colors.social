import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { SnackService } from 'src/app/services/snackbar/snack.service';
@Injectable({
  providedIn: 'root',
})
export class ChangeUserPreferencesService {
  constructor(
    private chipsLogin: ChipsLoginService,
    private af: AngularFirestore,
    private snackService: SnackService,
    private afAuth: AngularFireAuth
  ) {}

  submitInterests() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const chosenInterests = this.chipsLogin.getSelectedNiches();
        this.af.doc(`users/${user.uid}`).update({
          niches: chosenInterests,
        });
        this.snackService.CreateSnackNotification('Changes Submitted', '');
      }
    });
  }

  submitSkills() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const chosenSkills = this.chipsLogin.getSelectedSkills();
        this.af.doc(`users/${user.uid}`).update({
          niches: chosenSkills,
        });
        this.snackService.CreateSnackNotification('Changes Submitted', '');
      }
    });
  }
}

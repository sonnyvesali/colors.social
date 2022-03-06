import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';

@Directive({
  selector: '[appGoogleSignIn]',
})
export class GoogleSignInDirective {
  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    private UserAndProjectInfo: UserAndProjectInfoService
  ) {}
  @HostListener('click')
  onClicks() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe((user) => {
      this.af
        .collection('users')
        .doc(user?.uid)
        .ref.get()
        .then((doc) => {
          if (!doc.exists) {
            this.af.collection('users').doc(user?.uid).set({
              userUID: user?.uid,
              profileCreated: false,
              email: user?.email,
            });
          } else {
            this.UserAndProjectInfo.getProfileInfo();
          }
        });
    });
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAndProjectInfoService {
  constructor(private af: AngularFirestore, private afAuth: AngularFireAuth) {}

  email!: string;
  name!: string;
  userDocExists!: boolean;

  profileCompleted!: boolean;
  profileCreated!: boolean;
  profileInfoArr: boolean[] = [this.profileCompleted, this.profileCreated];
  userHasPaid!: boolean;
  userType!: string;
  userUID!: string;
  userInfoArr!: string[];

  getNameAndEmail() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const nameAndEmail$ = this.af
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .pipe(
            map((info: any) => {
              return [info.email, info.name];
            })
          );
        return nameAndEmail$.subscribe((info: any) => {
          [this.email, this.name] = info;
          console.log(info, 'service');
          return info;
        });
      } else {
        return null;
      }
    });
  }

  getProfileInfo() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const profile$ = this.af
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .pipe(
            map((info: any) => {
              return [info.profileComplete, info.profileCreated];
            })
          );

        return profile$.subscribe((info: any) => {
          [this.profileCompleted, this.profileCreated] = info;
          console.log(this.profileInfoArr, 'service');
          return info;
        });
      } else {
        return null;
      }
    });
  }

  getUserInfo() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userInfo$ = this.af
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .pipe(
            map((info: any) => {
              return [info.userType, info.userUID];
            })
          );

        return userInfo$.subscribe((doc) => {
          [this.userType, this.userUID] = doc;
          console.log(doc, 'service');
          return doc;
        });
      } else {
        return null;
      }
    });
  }

  userDoc$ = this.afAuth.authState.pipe(
    switchMap((user) => {
      if (user) {
        return this.af.doc(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    })
  );

  userPaymentInfo$ = this.afAuth.authState.pipe(
    switchMap((user) => {
      if (user) {
        return this.af
          .collection(`users/${user.uid}/payments`, (ref) =>
            ref.where('amount_recieved', 'in', 20000)
          )
          .valueChanges();
      } else {
        return of(null);
      }
    })
  );
  hasUserPaid() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userPaid$ = this.af
          .collection(`users/${user.uid}/payments`, (ref) =>
            ref.where('amount_received', '==', 20000)
          )
          .valueChanges();
        return userPaid$.subscribe((doc: any) => {
          if (doc[0].amount_received === 20000) {
            this.userHasPaid = true;
            this.af.doc(`users/${user.uid}`).update({ hasPaid: true });
          } else {
            this.userHasPaid = false;
          }
        });
      } else {
        return null;
      }
    });
  }
}

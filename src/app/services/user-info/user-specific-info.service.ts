import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSpecificInfoService {
  constructor(private af: AngularFirestore, private afAuth: AngularFireAuth) {}

  niches!: string[];
  skillsets!: string[];

  getUserInfo() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userInfoObservable = this.af
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .pipe(
            map((info: any) => {
              return [info.niches, info.skillsets];
            })
          );
        return userInfoObservable.subscribe((info: any) => {
          [this.niches, this.skillsets] = info;
          console.log(info, 'service');
          return info;
        });
      } else {
        return null;
      }
    });
  }
}

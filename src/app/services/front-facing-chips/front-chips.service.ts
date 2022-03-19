import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
export interface ChipsObj {
  name: string;
  selected: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class FrontChipsService {
  constructor(public af: AngularFirestore, public afAuth: AngularFireAuth) {}

  selectedRoles: string[] = [];
  chipsDS: ChipsObj[] = [];

  getListedContributors() {}

  async getSelectedRoles() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const selectedRole$ = this.af
          .doc(`users/${user.uid}`)
          .valueChanges()
          .pipe(
            map((docInfo: any) => {
              return docInfo.listedContributors;
            })
          );
        return selectedRole$.subscribe((info: any) => {
          this.selectedRoles = info;
          this.PushSelectedChips();
        });
      } else {
        return null;
      }
    });
  }

  private PushSelectedChips() {
    for (let i = 0; i <= this.selectedRoles.length - 1; i++) {
      if (this.chipsDS.length < this.selectedRoles.length) {
        this.chipsDS.push({
          name: this.selectedRoles[i],
          selected: false,
        });
      }
    }
  }
}

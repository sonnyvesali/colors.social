import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { ProjectDoc } from '../user-info/project-specific-info.service';

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

  async getSelectedRoles() {
    //ok we're having the same problem let's do the thing with the subscribe
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
          for (let i = 0; i <= this.selectedRoles.length - 1; i++) {
            if (this.chipsDS.length < this.selectedRoles.length) {
              this.chipsDS.push({
                name: this.selectedRoles[i],
                selected: false,
              });
            }
          }
        });
      } else {
        return null;
      }
    });
  }
}

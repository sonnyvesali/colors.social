import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectCardServiceService {
  //inclued afs,af,
  constructor(private afs: AngularFireStorage, private af: AngularFirestore) {}

  imagePath!: any;
  projectRef!: AngularFirestoreCollection<any>;
  project$: Observable<any> = of('');
  PicObj: any = {};
  SelectedID: string | null = null;

  setObject(object: Object, path: string, value: any) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastObj = keys.reduce(
      (obj: any, key: any) => (obj[key] = obj[key] || {}),
      object
    );
    lastObj[lastKey as string] = value;
  }

  QueryPublicProjects() {
    this.projectRef = this.af.collection('users', (ref) =>
      ref.where('readyToList', '==', true)
    );
    this.project$ = this.projectRef.valueChanges();

    this.project$.subscribe((doc) => {
      for (let i = 0; i < Object.keys(doc).length - 1; i++) {
        this.setObject(this.PicObj, `card_${i}`, null);
        for (let j = 0; j < Object.keys(doc[i].pics_arr).length - 1; j++) {
          this.setObject(this.PicObj, `card_${j}`, [doc[j].pics_arr]);
          this.setObject(this.PicObj, `card_${j}.selected`, false);
        }
      }
    });
  }
}

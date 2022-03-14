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
export class ProjectCardService {
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

  queryPublicProjects() {
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
  HoverIn(element: any) {
    this.PicObj[element.id].selected = true;
    this.SelectedID = element.id;
    this.imagePath = this.PicObj[element.id][0][0];
  }

  HoverOut() {
    this.PicObj[this.SelectedID as string].selected = false;
    this.SelectedID = null;
  }

  changeTheImg(parentElement: HTMLElement, Image: HTMLElement) {
    this.imagePath = this.PicObj[parentElement.id][0][Image.id];
  }

  defaultPath(parentElement: HTMLElement) {
    this.imagePath = this.PicObj[parentElement.id][0][0];
  }
}

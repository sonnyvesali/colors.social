import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { HomePageService } from 'src/app/the-home-page/home-page.service';
@Injectable({
  providedIn: 'root',
})
export class ProjectCardService {
  constructor(private af: AngularFirestore) {}

  imagePath!: any;
  NoProjectsFound: boolean | null = null;
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
    this.projectRef = this.af.collection('projects', (ref) =>
      ref.where('readyToList', '==', true)
    );
    this.project$ = this.projectRef.valueChanges();

    this.project$.subscribe((doc) => {
      console.log(Object.keys(doc).length);
      for (let i = 0; i < Object.keys(doc).length; i++) {
        this.setObject(this.PicObj, `card_${i}`, [doc[i].pics_arr]);
        this.setObject(this.PicObj, `card_${i}.selected`, false);
        this.setObject(this.PicObj, `card_${i}.selected_filter`, null);
        this.setObject(this.PicObj, `card_${i}.open_roles`, doc[i].open_roles);
        this.setObject(this.PicObj, `card_${i}.niches`, doc[i].niches);
      }
    });
    console.log(this.PicObj, 'pic objs');
    // console.log(this.loginChips.getUserSkills(), 'getuserskills');
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

  changeTheImg(parentElement: any, Image: any) {
    console.log(Image.id);
    this.imagePath = this.PicObj[parentElement.id][0][Image.id];
  }

  defaultPath(parentElement: any) {
    this.imagePath = this.PicObj[parentElement.id][0][0];
  }
}

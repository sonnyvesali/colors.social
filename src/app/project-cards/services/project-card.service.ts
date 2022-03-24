import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
@Injectable({
  providedIn: 'root',
})
export class ProjectCardService {
  constructor(
    private af: AngularFirestore,
    private mixpanel: MixpanelService
  ) {}

  imagePath!: any;
  picsArr: string[] = [];
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

  queryDemo() {
    this.projectRef = this.af.collection('demo', (ref) =>
      ref.where('readyToList', '==', true)
    );
    this.project$ = this.projectRef.valueChanges();
    this.project$.subscribe((doc) => {
      this.picsArr = doc[0].pics_arr;
      this.imagePath = doc[0].pics_arr[0];
    });
  }

  changeDemoImg(Image: any) {
    this.imagePath = this.picsArr[Image.id];
  }

  defaultDemoImg() {
    this.imagePath = this.picsArr[0];
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
        this.setObject(this.PicObj, `card_${i}.name`, doc[i].project_name);
      }
    });
    console.log(this.PicObj, 'pic objs');
    // console.log(this.loginChips.getUserSkills(), 'getuserskills');
  }
  HoverIn(el: any) {
    this.mixpanel.projectInteraction(
      'Project Hover',
      `${this.PicObj[el.id].name}`,
      `${this.PicObj[el.id].niches}`,
      `${this.PicObj[el.id].open_roles}`
    );
    this.PicObj[el.id].selected = true;
    this.SelectedID = el.id;
    this.imagePath = this.PicObj[el.id][0][0];
  }

  trackProjectClicks(el: any) {
    this.mixpanel.projectInteraction(
      'Project Click',
      `${this.PicObj[el.id].name}`,
      `${this.PicObj[el.id].niches}`,
      `${this.PicObj[el.id].open_roles}`
    );
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

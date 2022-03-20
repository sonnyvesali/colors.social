import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { ProjectCardService } from 'src/app/project-cards/services/project-card.service';
import { DemoProfilePageService } from '../services/demo-profile-page.service';

@Component({
  selector: 'app-demo-profile-page',
  templateUrl: './demo-profile-page.component.html',
  styleUrls: ['./demo-profile-page.component.scss'],
})
export class DemoProfilePageComponent implements OnInit {
  constructor(
    private afs: AngularFirestore,
    public ProjectCardService: ProjectCardService,
    private route: ActivatedRoute,
    public profilePage: DemoProfilePageService
  ) {}
  GenProject$!: Observable<any>;
  SpecificProject$!: Observable<any>;

  ngOnInit(): void {
    this.SpecificProject$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const projectName = params.get('specific-demo');

        return this.afs
          .doc(`demo/${projectName}/more-info/${projectName}`)
          .valueChanges();
      })
    );
    this.GenProject$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const projectName = params.get('specific-demo');
        return this.afs.doc(`demo/${projectName}`).valueChanges();
      })
    );
    this.GenProject$.subscribe((doc: any) => {
      this.profilePage.imagePath = doc.pics_arr[0];
      console.log(doc);
      this.profilePage.pics_arr = doc.pics_arr;
    });
  }
}

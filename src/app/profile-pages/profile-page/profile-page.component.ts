import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { ProjectCardService } from 'src/app/project-cards/services/project-card.service';
import { ProfilePageService } from '../services/profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private afs: AngularFirestore,
    public ProjectCardService: ProjectCardService,
    private route: ActivatedRoute,
    public profilePage: ProfilePageService
  ) {}
  GenProject$!: Observable<any>;
  SpecificProject$!: Observable<any>;

  ngOnInit(): void {
    this.SpecificProject$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const projectName = params.get('specific-profile');

        return this.afs
          .doc(`projects/${projectName}/more-info/${projectName}`)
          .valueChanges();
      })
    );
    this.GenProject$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const projectName = params.get('specific-profile');
        return this.afs.doc(`projects/${projectName}`).valueChanges();
      })
    );
    this.GenProject$.subscribe((doc: any) => {
      this.profilePage.imagePath = doc.pics_arr[0];
      this.profilePage.pics_arr = doc.pics_arr;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { ProjectCardService } from 'src/app/project-cards/services/project-card.service';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
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
    public profilePage: ProfilePageService,
    private mixpanel: MixpanelService
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
      this.profilePage.projectNiches = doc.niches;
      this.profilePage.projectName = doc.project_name;
      this.profilePage.projectRoles = doc.open_roles;
      this.profilePage.imagePath = doc.pics_arr[0];
      this.profilePage.pics_arr = doc.pics_arr;
    });
  }

  UserProjectMatch() {
    this.mixpanel.track('User Project Match', {
      'Project Name': this.profilePage.projectName,
      'Project Niches': this.profilePage.projectNiches,
      'Open Roles': this.profilePage.projectRoles,
    });
  }
  // how are we going to implement this?
}

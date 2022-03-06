import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectSpecificInfoService {
  constructor(private af: AngularFirestore, private afAuth: AngularFireAuth) {}
  userUID!: string;
  discordLink!: string;
  listedContributors!: string;
  profileReadyToList!: string;
  projectName!: string;
  projectBio!: string;
  projectNiches!: string;

  projectInfoArr: string[] = [
    this.discordLink,
    this.listedContributors,
    this.profileReadyToList,
    this.projectBio,
    this.projectName,
    this.projectNiches,
  ];

  getProjectInfo() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const projectInfoObservable = this.af
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .pipe(
            map((info: any) => {
              return [
                info.discordLink,
                info.listedContributors,
                info.profileReadyToList,
                info.projectBio,
                info.projectName,
                info.selectedNiches,
              ];
            })
          );

        return projectInfoObservable.subscribe((info: any) => {
          [
            this.discordLink,
            this.listedContributors,
            this.profileReadyToList,
            this.projectBio,
            this.projectName,
            this.projectNiches,
          ] = info;
          console.log(info, 'service');
          return info;
        });
      } else {
        return null;
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, pipe, switchMap } from 'rxjs';
import { collection, where, query } from 'firebase/firestore';
import { Subject } from 'rxjs';

export interface ProjectDoc {
  discord?: string;
  first_answer?: string;
  niches?: string[];
  onboarding_process?: Object;
  open_roles?: string[];
  pictures?: Object;
  project_name?: string;
  readyToList?: boolean;
  second_answer?: string;
  third_answer?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  instagram?: string;
}
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
  projectDocs: any[] = [];

  getTheDocs() {
    return this.af
      .collection('users', (ref) => ref.where('readyToList', '==', 'true'))
      .valueChanges();
  }
}

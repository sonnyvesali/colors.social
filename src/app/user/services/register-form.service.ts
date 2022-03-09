import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { SnackService } from 'src/app/services/snackbar/snack.service';
@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {
  constructor(
    private chipsService: ChipsLoginService,
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    private afStorage: AngularFireStorage,
    private SnackService: SnackService
  ) {}
  fileToUpload: File | null = null;
  path!: any;
  remainingText!: number;
  value: string = '';
  imgUploaded!: boolean;
  loading: boolean = false;
  selectedChips: string[] = [];

  //======================== Start of First User Form ========================
  nameIsFilledOut(name: string) {
    if (typeof name === 'string') {
      if (name !== '') {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    } else if (typeof name === 'object') {
      console.log(false);
      return false;
    } else {
      console.log(false);
      return false;
    }
  }
  onUserSubmit(name: string) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const chosenNiches = this.chipsService.getSelectedNiches();
        const chosenSkillset = this.chipsService.getSelectedSkills();

        this.af.collection('users').doc(user.uid).update({
          name: name,
          niches: chosenNiches,
          userType: 'user',
          skillsets: chosenSkillset,
          profileComplete: true,
        });
        this.SnackService.CreateSnackNotification('Profile Created!', '');
      }
    });
  }
  //======================== End of First User Form ========================
  //======================== Start of First Project Form ========================
  upload($event: any) {
    if ($event.arget.files[0].size < 2000000) {
      this.path = $event.target.files[0];
    }
  }

  async uploadImage() {
    const user = await this.afAuth.currentUser;
    const userUID = user?.uid;

    this.afStorage.upload(
      `/project-avatars/${userUID}/project-avatar`,
      this.path
    );
  }

  valueChange(value: string) {
    this.remainingText = 150 - value.length;
  }
  formIsFilledOut(name: string, projectName: string, bio: string) {
    const selectedNiches = this.chipsService.getSelectedNiches();
    console.log(typeof name, typeof bio, selectedNiches);
    if (
      name === '' ||
      bio === '' ||
      selectedNiches === [] ||
      projectName === ''
    ) {
      console.log(false);
      return false;
    } else {
      console.log(true);
      return true;
    }
  }
  async onFirstStepSubmit(name: string, projectName: string, bio: string) {
    const selectedNiches = this.chipsService.getSelectedNiches();
    console.log(selectedNiches);
    const user = await this.afAuth.currentUser;
    const userUID = user?.uid;
    await this.uploadImage();
    await this.af.collection('users').doc(userUID).update({
      name: name,
      projectName: projectName,
      projectBio: bio,
      selectedNiches: selectedNiches,
    });
  }

  //======================== End of First Project Form ========================
  //======================== Start of Second Project Form ========================
  secondFormIsDone(discordLink: string) {
    const selectedContributors = this.chipsService.getSkillSetNumber();
    if (selectedContributors === 0 || discordLink === '') {
      return true;
    } else if (discordLink.includes('https://discord.gg/')) {
      return false;
    } else {
      return true;
    }
  }

  async onSecondSubmit(discordLink: string) {
    const selectedContributors = this.chipsService.getSelectedSkills();
    const user = await this.afAuth.currentUser;
    const userUID = user?.uid;
    await this.af.collection('users').doc(userUID).update({
      listedContributors: selectedContributors,
      discordLink: discordLink,
      profileReadyToList: true,
      profileType: 'project',
      profileComplete: true,
      profileCreated: true,
    });
    this.SnackService.CreateSnackNotification('Profile Created', '');
  }
  //==================== End of Second Project From ====================
}

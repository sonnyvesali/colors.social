import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { StepperService } from 'src/app/user/services/stepper.service';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-project-form1',
  templateUrl: './create-project-form1.component.html',
  styleUrls: ['./create-project-form1.component.scss'],
})
export class CreateProjectForm1Component implements OnInit {
  constructor(
    public chipsService: ChipsLoginService,
    private _ngZone: NgZone,
    private fb: FormBuilder,
    public afStorage: AngularFireStorage,
    private af: AngularFirestore,
    private afAuth: AngularFireAuth,
    public StepperService: StepperService,
    public stepper: MatStepper
  ) {}
  //2 forms

  createProfileForm!: FormGroup;

  TestForm!: FormGroup;
  fileToUpload: File | null = null;
  path!: any;
  remainingText!: number;
  value: string = '';
  imgUploaded!: boolean;
  loading: boolean = false;
  selectedChips: string[] = [];

  ngOnInit(): void {
    this.createProfileForm = this.fb.group({
      name: ['', Validators.required],
      projectName: ['', [Validators.required]],
      projectBio: ['', [Validators.required]],
    });
  }

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  resizeProjectBioField() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.autosize.resizeToFitContent(true);
    });
  }

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
  formIsFilledOut() {
    const name = this.createProfileForm.get('name')?.value;
    const projectName = this.createProfileForm.get('projectName')?.value;
    const bio = this.createProfileForm.get('projectBio')?.value;
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
  async onFirstStepSubmit() {
    const name = this.createProfileForm.get('name')?.value;
    const projectName = this.createProfileForm.get('projectName')?.value;
    console.log(name);
    const bio = this.createProfileForm.get('projectBio')?.value;
    console.log(bio);
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

  getSelectedChips() {
    this.selectedChips = this.chipsService.getSelectedSkills();
    console.log(this.selectedChips);
  }
}
// I think I figured it out, so we can proceed
// push all the shit here but instantiation
// happens here

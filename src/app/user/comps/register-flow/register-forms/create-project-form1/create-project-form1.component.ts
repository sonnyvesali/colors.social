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
import { RegisterFormService } from 'src/app/user/services/register-form.service';

@Component({
  selector: 'app-create-project-form1',
  templateUrl: './create-project-form1.component.html',
  styleUrls: ['./create-project-form1.component.scss'],
})
export class CreateProjectForm1Component implements OnInit {
  constructor(
    public chipsService: ChipsLoginService,
    private _ngZone: NgZone,
    public RegisterService: RegisterFormService,
    private fb: FormBuilder,
    public afStorage: AngularFireStorage,
    public StepperService: StepperService,
    public stepper: MatStepper
  ) {}

  createProfileForm!: FormGroup;

  ngOnInit(): void {
    this.createProfileForm = this.fb.group({
      name: ['', Validators.required],
      projectName: ['', [Validators.required]],
      projectBio: ['', [Validators.required]],
    });
  }

  get name() {
    return this.createProfileForm.get('name')?.value;
  }

  get projectName() {
    return this.createProfileForm.get('projectName')?.value;
  }

  get projectBio() {
    return this.createProfileForm.get('projectBio')?.value;
  }

  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;

  resizeProjectBioField() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.autosize.resizeToFitContent(true);
    });
  }
}

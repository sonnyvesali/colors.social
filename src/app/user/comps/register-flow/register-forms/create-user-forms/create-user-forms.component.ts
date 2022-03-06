import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { SnackService } from 'src/app/services/snackbar/snack.service';
import { StepperService } from 'src/app/user/services/stepper.service';

@Component({
  selector: 'app-create-user-forms',
  templateUrl: './create-user-forms.component.html',
  styleUrls: ['./create-user-forms.component.scss'],
})
export class CreateUserFormsComponent implements OnInit {
  CreateUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private af: AngularFirestore,
    private afAuth: AngularFireAuth,
    public chipsService: ChipsLoginService,
    public snack: SnackService,
    public stepper: MatStepper,
    public StepperService: StepperService
  ) {}

  ngOnInit(): void {
    this.CreateUser = this.fb.group({
      name: new FormControl([], Validators.required),
      niches: new FormControl([], Validators.required),
      skillset: new FormControl([], Validators.required),
    });
  }

  nameIsFilledOut() {
    const name = this.CreateUser.get('name')?.value;
    console.log(name, typeof name);
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
  onSubmit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const name = this.CreateUser.get('name')?.value;
        const chosenNiches = this.chipsService.getSelectedNiches();
        const chosenSkillset = this.chipsService.getSelectedSkills();

        this.af.collection('users').doc(user.uid).update({
          name: name,
          niches: chosenNiches,
          skillsets: chosenSkillset,
          profileComplete: true,
        });
        this.snack.CreateSnackNotification('Profile Created!', '');
      }
    });
  }
}

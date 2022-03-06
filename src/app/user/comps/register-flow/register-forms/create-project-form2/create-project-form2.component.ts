import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { SnackService } from 'src/app/services/snackbar/snack.service';
import { StepperService } from 'src/app/user/services/stepper.service';

@Component({
  selector: 'app-create-project-form2',
  templateUrl: './create-project-form2.component.html',
  styleUrls: ['./create-project-form2.component.scss'],
})
export class CreateProjectForm2Component implements OnInit {
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private SnackService: SnackService,
    public chipsService: ChipsLoginService,
    private af: AngularFirestore,
    public StepperService: StepperService,
    public stepper: MatStepper
  ) {}
  addContributors!: FormGroup;
  ngOnInit(): void {
    this.addContributors = this.fb.group({
      discordLink: ['', Validators.required],
    });
  }

  secondFormIsDone() {
    const selectedContributors = this.chipsService.getSkillSetNumber();
    const discordLink = this.addContributors.get('discordLink')?.value;
    // console.log(discordLink);
    if (selectedContributors === 0 || discordLink === '') {
      return true;
    } else if (discordLink.includes('https://discord.gg/')) {
      return false;
    } else {
      return true;
    }
  }

  async onSecondSubmit() {
    const selectedContributors = this.chipsService.getSelectedSkills();
    const discordLink = this.addContributors.get('discordLink')?.value;
    const user = await this.afAuth.currentUser;
    const userUID = user?.uid;
    await this.af.collection('users').doc(userUID).update({
      listedContributors: selectedContributors,
      discordLink: discordLink,
      profileReadyToList: true,
      profileComplete: true,
      profileCreated: true,
    });
    this.SnackService.CreateSnackNotification('Profile Created', '');
  }
}

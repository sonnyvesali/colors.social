import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatStepper } from '@angular/material/stepper';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { UserSpecificInfoService } from 'src/app/services/user-info/user-specific-info.service';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-prof-settings-s1',
  templateUrl: './prof-settings-s1.component.html',
  styleUrls: ['./prof-settings-s1.component.scss'],
})
export class ProfSettingsS1Component implements OnInit {
  constructor(
    public EditProfStepperService: EditProfStepperService,
    public stepper: MatStepper,
    public UserSpecificInfo: UserSpecificInfoService,
    public chipsService: ChipsLoginService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.UserSpecificInfo.getUserInfo();
        this.chipsService.getUserInterests();
      }
    });
  }

  /* 
  Where do we start?

  this.EditProfStepperService.

  Let's start with implementing the markup &&  inject 
  */
}

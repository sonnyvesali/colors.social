import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatStepper } from '@angular/material/stepper';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
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
    public UserandProjectInfo: UserAndProjectInfoService,
    public UserSpecificInfo: UserSpecificInfoService,
    public chipsService: ChipsLoginService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.UserandProjectInfo.getUserInfo();
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        // this.UserSpecificInfo.getUserInfo();
        this.chipsService.getUserInterests();
      }
    });
  }

  /* 
      Ok the problem here is that you're making the same
      call to the back end what you need to do is make
      the call conditional on what the user type is:
      we can do that later for now lets focus on design
  */
}

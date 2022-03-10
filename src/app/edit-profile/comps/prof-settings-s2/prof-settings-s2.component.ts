import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
import { DeleteProfileService } from '../../services/delete-profile.service';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-prof-settings-s2',
  templateUrl: './prof-settings-s2.component.html',
  styleUrls: ['./prof-settings-s2.component.scss'],
})
export class ProfSettingsS2Component implements OnInit {
  constructor(
    public stepper: MatStepper,
    public EditProfStepperService: EditProfStepperService,
    public UserAndProjectInfo: UserAndProjectInfoService,
    public deleteProfileService: DeleteProfileService
  ) {}

  ngOnInit(): void {
    this.UserAndProjectInfo.getUserInfo();
  }
}

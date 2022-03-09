import { Component, OnInit } from '@angular/core';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  constructor(
    public EditProfStepperService: EditProfStepperService,
    private chipsLoginService: ChipsLoginService
  ) {}

  ngOnInit(): void {
    this.chipsLoginService.getUserInterests();
    this.chipsLoginService.getUserSkills();
    // this.stepperService;
  }
}

import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { EditNameAndEmailService } from '../../services/edit-name-and-email.service';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-prof-settings-s3',
  templateUrl: './prof-settings-s3.component.html',
  styleUrls: ['./prof-settings-s3.component.scss'],
})
export class ProfSettingsS3Component implements OnInit {
  constructor(
    public stepper: MatStepper,
    public EditProfStepperService: EditProfStepperService,
    public EditNameAndEmail: EditNameAndEmailService,
    public chipsService: ChipsLoginService
  ) {}

  ngOnInit(): void {
    this.chipsService.getUserInterests();
    this.chipsService.getNicheNumber();
  }
}

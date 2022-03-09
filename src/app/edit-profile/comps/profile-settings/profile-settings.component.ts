import { Component, OnInit } from '@angular/core';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  constructor(public EditProfStepperService: EditProfStepperService) {}

  ngOnInit(): void {
    // this.stepperService;
  }
}

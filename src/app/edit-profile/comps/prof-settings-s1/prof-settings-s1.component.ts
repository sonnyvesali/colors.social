import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-prof-settings-s1',
  templateUrl: './prof-settings-s1.component.html',
  styleUrls: ['./prof-settings-s1.component.scss'],
})
export class ProfSettingsS1Component implements OnInit {
  constructor(
    public EditProfStepperService: EditProfStepperService,
    public stepper: MatStepper
  ) {}

  ngOnInit(): void {}

  /* 
  Where do we start?

  this.EditProfStepperService.

  Let's start with implementing the markup &&  inject 
  */
}

import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { EditProfStepperService } from 'src/app/edit-profile/services/edit-prof-stepper.service';

@Component({
  selector: 'app-option-tier',
  templateUrl: './option-tier.component.html',
  styleUrls: ['./option-tier.component.scss'],
})
export class OptionTierComponent implements OnInit {
  constructor(
    public EditProfStepperService: EditProfStepperService,
    public stepper: MatStepper
  ) {}

  @Input() Icon!: string;
  @Input() Title!: string;
  @Input() subtitle!: string;

  ngOnInit(): void {}
}

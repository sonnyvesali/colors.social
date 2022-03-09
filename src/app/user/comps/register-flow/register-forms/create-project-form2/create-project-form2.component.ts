import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { RegisterFormService } from 'src/app/user/services/register-form.service';
import { StepperService } from 'src/app/user/services/stepper.service';

@Component({
  selector: 'app-create-project-form2',
  templateUrl: './create-project-form2.component.html',
  styleUrls: ['./create-project-form2.component.scss'],
})
export class CreateProjectForm2Component implements OnInit {
  constructor(
    private fb: FormBuilder,
    public StepperService: StepperService,
    public stepper: MatStepper,
    public RegisterService: RegisterFormService
  ) {}
  addContributors!: FormGroup;
  ngOnInit(): void {
    this.addContributors = this.fb.group({
      discordLink: ['', Validators.required],
    });
  }

  get discordLink() {
    return this.addContributors.get('discordLink')?.value;
  }
}

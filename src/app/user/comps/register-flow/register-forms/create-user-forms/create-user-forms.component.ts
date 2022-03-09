import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { RegisterFormService } from 'src/app/user/services/register-form.service';
import { StepperService } from 'src/app/user/services/stepper.service';

@Component({
  selector: 'app-create-user-forms',
  templateUrl: './create-user-forms.component.html',
  styleUrls: ['./create-user-forms.component.scss'],
})
export class CreateUserFormsComponent implements OnInit {
  CreateUser!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public chipsService: ChipsLoginService,
    public stepper: MatStepper,
    public RegisterService: RegisterFormService,
    public StepperService: StepperService
  ) {}

  get name() {
    return this.CreateUser.get('name')?.value;
  }

  ngOnInit(): void {
    this.CreateUser = this.fb.group({
      name: new FormControl([], Validators.required),
      niches: new FormControl([], Validators.required),
      skillset: new FormControl([], Validators.required),
    });
  }
}

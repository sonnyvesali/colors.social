import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { LoginFormService } from '../../services/login-form.service';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-register-flow',
  templateUrl: './register-flow.component.html',
  styleUrls: ['./register-flow.component.scss'],
})
export class RegisterFlowComponent implements OnInit, OnDestroy {
  constructor(
    public afAuth: AngularFireAuth,
    public LoginFormService: LoginFormService,
    private router: Router,
    public StepperService: StepperService
  ) {}
  chosenUserType: 'User' | 'Project' | 'undecided' = 'undecided';

  ngOnInit(): void {
    this.LoginFormService.user = this.afAuth.authState;
    this.LoginFormService.url = this.router.url;
    this.LoginFormService.confirmSignIn(this.LoginFormService.url);
    //so we need to initialize the form here...
  }

  ngOnDestroy(): void {
    // window.localStorage.clear();
  }

  // goForward(stepper: MatStepper, element: HTMLElement) {
  //   stepper.next();
  //   const ref = element.textContent;
  //   if (ref === 'User') {
  //     this.chosenUserType = 'User';
  //   } else if (ref === 'Project') {
  //     this.chosenUserType = 'Project';
  //   }
  //   console.log(this.chosenUserType);
  // }
  // goBack(stepper: MatStepper) {
  //   stepper.previous();
  //   if (stepper.selectedIndex !== 1) {
  //     this.chosenUserType = 'undecided';
  //   }
  //   console.log(this.chosenUserType);
  // }
}

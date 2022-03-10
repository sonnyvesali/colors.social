import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
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
    public af: AngularFirestore,
    public LoginFormService: LoginFormService,
    public userAndProjectInfo: UserAndProjectInfoService,
    private router: Router,
    public StepperService: StepperService
  ) {}
  chosenUserType: 'User' | 'Project' | 'undecided' = 'undecided';

  ngOnInit(): void {
    this.LoginFormService.user = this.afAuth.authState;
    this.userAndProjectInfo.getProfileInfo();
    if (this.userAndProjectInfo.profileCreated === false) {
      this.router.navigate(['/']);
    }
    // this.LoginFormService.url = this.router.url;
    // this.LoginFormService.confirmSignIn(this.LoginFormService.url);
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     this.af
    //       .doc(`users/${user.uid}`)
    //       .valueChanges()
    //       .pipe(
    //         take(1),
    //         map((user: any) => user.profileCreated),
    //         tap((profBool) => {
    //           console.log(profBool);
    //           if (profBool === true) {
    //             this.router.navigate(['']);
    //           } else {
    //             console.log(profBool);
    //             alert('suck my dick');
    //           }
    //         })
    //       );
    //   }
    // });
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

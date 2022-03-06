import { Injectable } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  chosenUserType: 'User' | 'Project' | 'Undecided' = 'Undecided';

  constructor() {}

  goForward(stepper: MatStepper, element: HTMLElement) {
    stepper.next();
    const ref = element.textContent;
    if (ref === 'User') {
      this.chosenUserType = 'User';
    } else if (ref === 'Project') {
      this.chosenUserType = 'Project';
    }
    console.log(this.chosenUserType);
  }
  goBack(stepper: MatStepper) {
    stepper.previous();
    if (stepper.selectedIndex !== 1) {
      this.chosenUserType = 'Undecided';
    }
    console.log(this.chosenUserType);
  }

  //
}

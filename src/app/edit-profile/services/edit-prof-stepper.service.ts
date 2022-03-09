import { Injectable } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Injectable({
  providedIn: 'root',
})
export class EditProfStepperService {
  constructor() {}
  firstChoice!: string;
  secondChoice!: string;
  thirdChoice!: string;
  currentIndex: number = 0;

  // getCurrentIndex(stepper: MatStepper) {
  //   this.currentIndex = stepper.selectedIndex;
  // }

  goForward(stepper: MatStepper, element: HTMLElement) {
    stepper.next();
    console.log(stepper.selectedIndex);
    this.currentIndex = stepper.selectedIndex;
    const chosenRef = element.textContent;
    console.log(chosenRef);
    if (chosenRef?.includes('Account')) {
      this.firstChoice = 'Account Information';
    } else if (chosenRef?.includes('Profile Preferences')) {
      this.firstChoice = 'Profile Preferences';
    } else if (chosenRef?.includes('Deactive your Account')) {
      this.firstChoice = 'Deactivate your Account';
    } else if (chosenRef?.includes('Change your Email')) {
      this.secondChoice = 'Change your Email';
    } else if (chosenRef?.includes('Change your Name')) {
      this.secondChoice = 'Change your Name';
    }
    console.log(this.firstChoice, '1st choice');
    console.log(this.secondChoice, '2nd choice');
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
    this.currentIndex = stepper.selectedIndex;
    console.log(this.currentIndex);
  }
}

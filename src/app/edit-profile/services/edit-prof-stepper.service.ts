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
    // console.log(stepper.selectedIndex);
    this.currentIndex = stepper.selectedIndex;
    const chosenRef = element.textContent;
    console.log(chosenRef, 'chosen ref');
    if (chosenRef === 'Account Information') {
      this.firstChoice = 'Account Information';
    } else if (chosenRef?.includes('Profile Preferences')) {
      this.firstChoice = 'Profile Preferences';
    } else if (chosenRef?.includes('Edit Project Profile')) {
      this.firstChoice = 'Edit Project Profile';
    } else if (chosenRef?.includes('Deactivate Your Account')) {
      this.firstChoice = 'Deactivate Your Account';
    } else if (chosenRef?.includes('Change your Email')) {
      this.secondChoice = 'Change your Email';
    } else if (chosenRef?.includes('Change your Name')) {
      this.secondChoice = 'Change your Name';
    } else if (chosenRef?.includes('View Project Interests')) {
      this.secondChoice = 'View Project Interests';
    } else if (chosenRef?.includes('View Skillsets')) {
      this.secondChoice = 'View Skillsets';
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

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as mixpanel from 'mixpanel-browser';
@Injectable({
  providedIn: 'root',
})
export class MixpanelService {
  constructor(private af: AngularFirestore) {}
  init(): void {
    mixpanel.init('2d9232f155649a8a42161659b0f58e9e', { debug: true });
    mixpanel.identify('new user');
  }

  identifyUser(userToken: string) {
    mixpanel.identify(userToken);
  }

  track(id: string, action: any = {}): void {
    mixpanel.track(id, action);
  }

  trackUserAction(personObj: any = {}) {
    mixpanel.people.set(personObj);
  }

  userProjectMatch(projectRef: HTMLElement) {
    const projectDoc = this.af
      .doc(`projects/${projectRef.textContent}`)
      .valueChanges();
    projectDoc.subscribe((doc: any) => {
      mixpanel.track('User Project Match', {
        'Project Name': doc.project_name,
        'Open Roles': doc.open_roles,
        'Project Niches': doc.niches,
      });
    });
  }
  landingPageView() {
    mixpanel.track('Landing Page View');
  }

  signedUpViaNavBar() {
    mixpanel.track('Signed up via NavBar');
  }

  loginClick() {
    mixpanel.track('Clicks on landing page login button');
  }

  loginPageView() {
    mixpanel.track('Login Page View');
  }

  registerPageView() {
    mixpanel.track('Register Page View');
  }

  projectInteraction(
    interactionType: string,
    projectName: string,
    projectNiches: string,
    projectRoles: string
  ) {
    mixpanel.track(interactionType, {
      'Project Name': projectName,
      'Project Niches': projectNiches,
      'Open Roles': projectRoles,
    });
  }
  Zero(nichesArr: string[], rolesArr: string[]) {
    mixpanel.track('ZERO', {
      'Zero Niches': nichesArr,
      'Zero roles': rolesArr,
    });
  }

  AppliedFilters(chosenNiches: string[], chosenRoles: string[]) {
    mixpanel.track('Filter Selection', {
      'Chosen Niches': chosenNiches,
      'Chosen Roles': chosenRoles,
    });
  }

  projectMatch() {}
}

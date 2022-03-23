import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
@Injectable({
  providedIn: 'root',
})
export class MixpanelService {
  constructor() {}
  init(): void {
    mixpanel.init('01e3325d52683fe2ee669c85cf6c3f02', { debug: true });
    mixpanel.identify('new user');
  }

  identifyUser(userToken: string) {
    mixpanel.identify(userToken);
  }

  track(id: string, action: any = {}): void {
    mixpanel.track(id, action);
  }

  // now it's all about figuring out where to implement it
  // and what events
}

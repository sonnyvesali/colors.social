import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSidenav } from '@angular/material/sidenav';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
import { HomePageService } from '../services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    public HomePageService: HomePageService,
    private mixPanel: MixpanelService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.mixPanel.track('User has viewed Project Page');
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.mixPanel.identifyUser(user.uid);
      }
    });
  }

  panelOpenState = true;
  opened: boolean = false;

  toggleFilter(ref: MatSidenav) {
    ref.toggle();
    this.opened = !this.opened;
  }
}

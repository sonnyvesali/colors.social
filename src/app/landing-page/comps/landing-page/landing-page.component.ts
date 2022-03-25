import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
import { SnackService } from 'src/app/services/snackbar/snack.service';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    public snack: SnackService,
    public userAndProjectInfo: UserAndProjectInfoService,
    public mixpanel: MixpanelService,
    private af: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  @ViewChild('tw') typewriterElement: any;

  ngOnInit(): void {
    // so if payments

    this;
    this.mixpanel.landingPageView();

    //figure out quick and dirty solution later;
    // this.afAuth.authState.subscribe((user) => {
    //   if (user) {
    //     const payment$ = this.af
    //       .collection(`users/${user.uid}/payments`, (ref) => ref)
    //       .valueChanges();
    //     payment$.subscribe((doc: any) => {
    //       console.log(doc);
    //     });
    //   }
    // });
  }

  ngAfterViewInit() {
    const Typewriter = require('t-writer.js');
    const target = this.typewriterElement.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 120,
      deleteSpeed: 80,
      typeColor: '#017cbf',
      cursorColor: '#017cbf',
    });
    writer
      .type('Developers.')
      .rest(1000)
      .clear()
      .type('Designers.')
      .rest(1000)
      .clear()
      .type('YOU!')
      .rest(1000)
      .start();
  }
}

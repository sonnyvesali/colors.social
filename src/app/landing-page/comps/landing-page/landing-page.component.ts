import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
import { SnackService } from 'src/app/services/snackbar/snack.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(public snack: SnackService, public mixpanel: MixpanelService) {}

  @ViewChild('tw') typewriterElement: any;

  ngOnInit(): void {}

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

  loginClick() {
    this.mixpanel.track('Clicks on landing page login button');
  }
}

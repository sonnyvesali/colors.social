import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

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
}

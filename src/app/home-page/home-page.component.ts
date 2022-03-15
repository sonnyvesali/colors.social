import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  panelOpenState = true;
  opened: boolean = false;

  toggleFilter(ref: MatSidenav) {
    ref.toggle();
    this.opened = !this.opened;
  }

  ngOnInit(): void {}
}

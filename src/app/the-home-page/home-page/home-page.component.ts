import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { HomePageService } from '../services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    public HomePageService: HomePageService,
    private chipsLogin: ChipsLoginService
  ) {}

  ngOnInit(): void {
    // this.HomePageService.getLongestCardArr();
    // this.chipsLogin.getFilteredNiche$();
  }

  panelOpenState = true;
  opened: boolean = false;

  toggleFilter(ref: MatSidenav) {
    ref.toggle();
    this.opened = !this.opened;
  }
}

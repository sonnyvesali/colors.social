import { Component, OnInit } from '@angular/core';
import { FrontChipsService } from '../services/front-facing-chips/front-chips.service';
// import { ChipsObj } from '../services/front-facing-chips/front-chips.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public frontChips: FrontChipsService) {}

  ngOnInit(): void {
    this.frontChips.getSelectedRoles();
  }
}

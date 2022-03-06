import { Component, OnInit } from '@angular/core';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';

@Component({
  selector: 'app-niche-chips-list',
  templateUrl: './niche-chips-list.component.html',
  styleUrls: ['./niche-chips-list.component.scss'],
})
export class NicheChipsListComponent implements OnInit {
  constructor(public range: ChipsLoginService) {}

  changeSelected = ($event: any, category: any) => {
    category.selected = $event.selected;
  };
  ngOnInit(): void {}
}

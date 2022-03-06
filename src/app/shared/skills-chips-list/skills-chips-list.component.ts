import { Component, OnInit } from '@angular/core';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';

@Component({
  selector: 'app-skills-chips-list',
  templateUrl: './skills-chips-list.component.html',
  styleUrls: ['./skills-chips-list.component.scss'],
})
export class SkillsChipsListComponent implements OnInit {
  constructor(public range: ChipsLoginService) {}

  changeSelected = ($event: any, category: any) => {
    category.selected = $event.selected;
  };

  ngOnInit(): void {}
}

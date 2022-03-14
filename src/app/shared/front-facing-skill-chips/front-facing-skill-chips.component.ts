import { Component, OnInit } from '@angular/core';
import { FrontChipsService } from 'src/app/services/front-facing-chips/front-chips.service';

@Component({
  selector: 'app-front-facing-skill-chips',
  templateUrl: './front-facing-skill-chips.component.html',
  styleUrls: ['./front-facing-skill-chips.component.scss'],
})
export class FrontFacingSkillChipsComponent implements OnInit {
  constructor(public frontChips: FrontChipsService) {}

  ngOnInit(): void {
    this.frontChips.getSelectedRoles();
    this.frontChips.chipsDS;
  }

  changeSelected = ($event: any, category: any) => {
    category.selected = $event.selected;
  };
}

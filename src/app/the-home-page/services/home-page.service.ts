import { Injectable } from '@angular/core';
import { ProjectCardService } from 'src/app/project-cards/services/project-card.service';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(
    private mixpanel: MixpanelService,
    private chipsLogin: ChipsLoginService,
    private projectCard: ProjectCardService
  ) {}

  PicsObj = this.projectCard.PicObj;

  applyFilterFactory(filterParam: string) {
    const chosenParam =
      filterParam === 'niches'
        ? this.chipsLogin.getSelectedNiches()
        : this.chipsLogin.getSelectedSkills();
    chosenParam.sort();
    for (let i = 0; i < Object.keys(this.PicsObj).length; i++) {
      const projectParam = this.PicsObj[`card_${i}`][filterParam];
      if (chosenParam.length === 0) {
        break;
      }
      this.projectCard.setObject(
        this.PicsObj,
        `card_${i}.selected_filter`,
        false
      );
      for (var j in projectParam) {
        for (var k in chosenParam) {
          if (chosenParam[k] === projectParam[j]) {
            this.projectCard.setObject(
              this.PicsObj,
              `card_${i}.selected_filter`,
              true
            );
          }
        }
      }
    }
  }

  applyFilter() {
    const selectedNiches = this.chipsLogin.getSelectedNiches();
    const selectedSkills = this.chipsLogin.getSelectedSkills();
    this.mixpanel.AppliedFilters(selectedNiches, selectedSkills);
    this.applyFilterFactory('niches');
    this.applyFilterFactory('open_roles');
    this.NoProjectsMatchCheck();
    console.log(this.PicsObj);
  }

  clearFilter() {
    for (let i = 0; i < Object.keys(this.PicsObj).length; i++) {
      this.projectCard.setObject(
        this.PicsObj,
        `card_${i}.selected_filter`,
        null
      );
    }
    this.projectCard.NoProjectsFound = null;
    this.chipsLogin.clearChips();
  }

  NoProjectsMatchCheck() {
    this.projectCard.NoProjectsFound = false;
    for (let i = 0; i < Object.keys(this.PicsObj).length; i++) {
      if (this.PicsObj[`card_${i}`]['selected_filter'] === true) {
        const selectedNiches = this.chipsLogin.getSelectedNiches();
        const selectedSkills = this.chipsLogin.getSelectedSkills();
        this.mixpanel.Zero(selectedNiches, selectedSkills);
        this.projectCard.NoProjectsFound = true;
      }
    }
    return this.projectCard.NoProjectsFound;
  }
}

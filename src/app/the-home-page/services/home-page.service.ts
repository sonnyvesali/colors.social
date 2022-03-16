import { Injectable } from '@angular/core';
import { ProjectCardService } from 'src/app/project-cards/services/project-card.service';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(
    private chipsLogin: ChipsLoginService,
    private projectCard: ProjectCardService
  ) {}

  projectRoleLength = 0;
  projectNicheLength = 0;
  nichesArr!: string[];
  skillsArr!: string[];
  PicsObj = this.projectCard.PicObj;
  nicheOverlap: any[] = [];

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
        null
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
    this.applyFilterFactory('niches');
    this.applyFilterFactory('open_roles');
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
    this.chipsLogin.clearChips();
  }
}

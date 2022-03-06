import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChipsLoginService {
  constructor() {}

  nichesArr = [
    { name: 'Lending & Borrowing', selected: false },
    { name: 'Derivatives', selected: false },
    { name: 'Experimental DeFi', selected: false },
    { name: 'JPEG NFTs', selected: false },
    { name: 'Misc. NFT Projects', selected: false },
    { name: 'Metaverse NFTs', selected: false },
    { name: 'Video Game NFTs', selected: false },
    { name: 'DeSocials', selected: false },
    { name: 'DeGovernance', selected: false },
    { name: 'DeVenture', selected: false },
  ];

  skillsetsArr = [
    { name: 'Technical Co-Founder', selected: false },
    { name: 'Non-Technical Co-Founder', selected: false },
    { name: 'Operations', selected: false },
    { name: 'Community Manager', selected: false },
    { name: 'UI/UX Design', selected: false },
    { name: 'Full-Stack Engineer', selected: false },
    { name: 'Front-End Engineer', selected: false },
    { name: 'Smart Contract Engineer', selected: false },
    { name: 'Social Media Manager', selected: false },
    { name: 'Marketing', selected: false },
  ];

  selectSingle: boolean = true;

  getSelectedNiches() {
    const selectedNichesArr: string[] = [];

    for (let i = 0; i < this.nichesArr.length - 1; i++) {
      if (this.nichesArr[i].selected === true) {
        selectedNichesArr.push(this.nichesArr[i].name);
      }
    }
    return selectedNichesArr;
  }

  getSelectedSkills() {
    const selectedSkillsArr: string[] = [];
    for (let i = 0; i < this.skillsetsArr.length - 1; i++) {
      if (this.skillsetsArr[i].selected === true) {
        selectedSkillsArr.push(this.skillsetsArr[i].name);
      }
    }
    return selectedSkillsArr;
  }

  getNicheNumber() {
    /* 
    We can actually loop through the selected propertie the the niche piece
    */
    let numOfSelected = 0;

    for (let i = 0; i < this.nichesArr.length - 1; i++) {
      if (this.nichesArr[i].selected === true) {
        numOfSelected++;
      }
    }
    return numOfSelected;
  }

  getSkillSetNumber() {
    let numOfSelected = 0;

    for (let i = 0; i < this.skillsetsArr.length - 1; i++) {
      if (this.skillsetsArr[i].selected === true) {
        numOfSelected++;
      }
    }
    return numOfSelected;
  }

  isInCategoryRange() {
    const nicheNum = this.getNicheNumber();
    if (nicheNum <= 2 && nicheNum >= 1) {
      return false;
    } else {
      return true;
    }
  }

  chosenNiches: string[] = [];
  chosenSkills: string[] = [];

  isInLoginRange() {
    const niches = this.getNicheNumber();
    const skills = this.getSkillSetNumber();

    if (niches <= 3 && niches >= 1 && skills <= 2 && skills >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

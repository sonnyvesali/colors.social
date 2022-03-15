import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { UserSpecificInfoService } from 'src/app/services/user-info/user-specific-info.service';
import { ProjectSpecificInfoService } from '../user-info/project-specific-info.service';
@Injectable({
  providedIn: 'root',
})
export class ChipsLoginService {
  nichesArr = [
    { name: 'Web 2.5', selected: false },
    { name: 'Payment Processing', selected: false },
    { name: 'DAO 2 DAO', selected: false },
    { name: 'Consumer Web3', selected: false },
    { name: 'Lending & Borrowing', selected: false },
    // { name: 'Derivatives', selected: false },
    { name: 'Experimental DeFi', selected: false },
    { name: 'JPEG NFTs', selected: false },
    { name: 'Misc. NFT Projects', selected: false },
    // { name: 'Metaverse NFTs', selected: false },
    // { name: 'Video Game NFTs', selected: false },
    { name: 'DeSocials', selected: false },
    { name: 'DeGovernance', selected: false },
    { name: 'DeVenture', selected: false },
  ];

  skillsetsArr = [
    { name: 'Technical Co-Founder', selected: false },
    { name: 'Non-Technical Co-Founder', selected: false },
    { name: 'Operations', selected: false },
    { name: 'Community Manager', selected: false },
    { name: 'UI/UX Designer', selected: false },
    { name: 'Full-Stack Engineer', selected: false },
    { name: 'Front-End Engineer', selected: false },
    { name: 'Smart Contract Engineer', selected: false },
    { name: 'Social Media Manager', selected: false },
    { name: 'Marketing', selected: false },
  ];

  // chainsArr = [
  //   {name: 'EVM Compatible', selected: false}
  //]

  constructor(private afAuth: AngularFireAuth, private af: AngularFirestore) {}
  selectedNiches: string[] = [];
  selectedSkills: string[] = [];

  getUserInterests() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userInterest$ = this.af
          .doc(`users/${user.uid}`)
          .valueChanges()
          .pipe(
            map((info: any) => {
              console.log(info.niches, 'info .niches');
              return info.niches;
            })
          );
        userInterest$.subscribe((niches: any) => {
          this.selectedNiches = niches;
          for (let i = 0; i < this.nichesArr.length - 1; i++) {
            for (let I = 0; I < this.nichesArr.length - 1; I++) {
              if (this.nichesArr[i].name === this.selectedNiches[I]) {
                this.nichesArr[i].selected = true;
              }
            }
          }
        });
      }
    });
  }

  getUserSkills() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userSkill$ = this.af
          .doc(`users/${user.uid}`)
          .valueChanges()
          .pipe(
            map((info: any) => {
              return info.skillsets;
            })
          );
        userSkill$.subscribe((skillsets: any) => {
          this.selectedSkills = skillsets;
          for (let i = 0; i < this.skillsetsArr.length - 1; i++) {
            for (let I = 0; I < this.skillsetsArr.length - 1; I++) {
              if (this.skillsetsArr[i].name === this.selectedSkills[I]) {
                this.skillsetsArr[i].selected = true;
              }
            }
          }
        });
      }
    });
  }

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

  isInNicheRange() {
    const nicheNum = this.getNicheNumber();
    if (nicheNum <= 3 && nicheNum >= 1) {
      return false;
    } else {
      return true;
    }
  }

  isInSkillRange() {
    const skillNum = this.getSkillSetNumber();
    if (skillNum <= 2 && skillNum >= 1) {
      return false;
    } else {
      return true;
    }
  }

  // isInNicheRange() {}

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

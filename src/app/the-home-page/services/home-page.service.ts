import { Injectable } from '@angular/core';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private chipsLogin: ChipsLoginService) {}

  getSelectedNiches() {
    console.log(this.chipsLogin.skillsetsArr, 'skillsets ARR');
  }

  //this is where all the filtering logic needs to be
}

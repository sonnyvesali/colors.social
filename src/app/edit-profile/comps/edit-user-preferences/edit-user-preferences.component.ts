import { Component, OnInit } from '@angular/core';
import { ChipsLoginService } from 'src/app/services/login-chips/chips-login.service';
import { ChangeUserPreferencesService } from '../../services/change-user-preferences.service';
import { EditProfStepperService } from '../../services/edit-prof-stepper.service';

@Component({
  selector: 'app-edit-user-preferences',
  templateUrl: './edit-user-preferences.component.html',
  styleUrls: ['./edit-user-preferences.component.scss'],
})
export class EditUserPreferencesComponent implements OnInit {
  /*
  What's needed here?
  1. Inject the service into the contructor
  */

  constructor(
    //bind this one to the buttons
    public changeUserPrefs: ChangeUserPreferencesService,
    public chipsService: ChipsLoginService,
    public EditProfStepperService: EditProfStepperService
  ) {}

  ngOnInit(): void {
    this.chipsService.getUserInterests();
    this.chipsService.getUserSkills();
  }
}

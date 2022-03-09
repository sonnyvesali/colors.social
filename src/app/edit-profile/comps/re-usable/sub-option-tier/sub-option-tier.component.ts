import { Component, Input, OnInit } from '@angular/core';
import { EditProfStepperService } from 'src/app/edit-profile/services/edit-prof-stepper.service';
import { MatStepper } from '@angular/material/stepper';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-sub-option-tier',
  templateUrl: './sub-option-tier.component.html',
  styleUrls: ['./sub-option-tier.component.scss'],
})
export class SubOptionTierComponent implements OnInit {
  constructor(
    public EditProfStepperService: EditProfStepperService,
    public stepper: MatStepper,
    public afAuth: AngularFireAuth,
    public af: AngularFirestore
  ) {}

  ngOnInit(): void {}

  @Input() Title!: string;
}

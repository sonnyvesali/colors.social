import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
import { EditNameAndEmailService } from '../../services/edit-name-and-email.service';
@Component({
  selector: 'app-edit-account-name',
  templateUrl: './edit-account-name.component.html',
  styleUrls: ['./edit-account-name.component.scss'],
})
export class EditAccountNameComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public userAndProjectInfo: UserAndProjectInfoService,
    public EditNameAndEmail: EditNameAndEmailService
  ) {}

  oldName!: any;
  NameForm!: FormGroup;

  get name() {
    return this.NameForm.get('name')?.value;
  }

  ngOnInit(): void {
    this.userAndProjectInfo.getNameAndEmail();
    this.NameForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    public userAndProjectInfo: UserAndProjectInfoService
  ) {}

  ngOnInit(): void {}
}

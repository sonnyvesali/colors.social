import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './comps/login-page/login-page.component';
import { RegisterFlowComponent } from './comps/register-flow/register-flow.component';
import { NewUserGuard } from './new-user.guard';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';
import { LoginRedirectComponent } from './comps/login-redirect/login-redirect.component';
const routes: Routes = [
  // if the user is logged in redirect to home
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInTo },
  },
  {
    path: 'register',
    component: RegisterFlowComponent,
    canActivate: [NewUserGuard],
  },
  {
    path: 'new-user',
    component: LoginRedirectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

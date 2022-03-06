import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './comps/login-page/login-page.component';
import { GoogleSignInDirective } from './directives/google-sign-in.directive';
import { LoginFormComponent } from './comps/login-form/login-form.component';
import { RegisterFlowComponent } from './comps/register-flow/register-flow.component';
import { CreateProjectForm1Component } from './comps/register-flow/register-forms/create-project-form1/create-project-form1.component';
import { CreateProjectForm2Component } from './comps/register-flow/register-forms/create-project-form2/create-project-form2.component';
import { CreateUserFormsComponent } from './comps/register-flow/register-forms/create-user-forms/create-user-forms.component';
@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    RegisterFlowComponent,
    GoogleSignInDirective,
    CreateProjectForm1Component,
    CreateProjectForm2Component,
    CreateUserFormsComponent,
  ],
  imports: [CommonModule, SharedModule, UserRoutingModule],
})
export class UserModule {}

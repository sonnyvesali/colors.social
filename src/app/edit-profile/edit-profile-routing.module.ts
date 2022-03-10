import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAccountComponent } from './comps/delete-account/delete-account.component';
import { EditAccountDataComponent } from './comps/edit-account-data/edit-account-data.component';
import { ProfileSettingsComponent } from './comps/profile-settings/profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedTo },
  },
  {
    path: 'change-email',
    component: EditAccountDataComponent,
  },
  {
    path: 'deactivate-account',
    component: DeleteAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileRoutingModule {}

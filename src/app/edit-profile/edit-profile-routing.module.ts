import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAccountDataComponent } from './comps/edit-account-data/edit-account-data.component';
import { ProfileSettingsComponent } from './comps/profile-settings/profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent,
  },
  {
    path: 'change-email',
    component: EditAccountDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileRoutingModule {}

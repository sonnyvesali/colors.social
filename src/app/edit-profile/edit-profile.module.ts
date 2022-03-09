import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { ProfileSettingsComponent } from './comps/profile-settings/profile-settings.component';
import { SharedModule } from '../shared/shared.module';
import { ProfSettingsS1Component } from './comps/prof-settings-s1/prof-settings-s1.component';
import { EditAccountDataComponent } from './comps/edit-account-data/edit-account-data.component';
import { OptionTierComponent } from './comps/re-usable/option-tier/option-tier.component';
import { ProfSettingsS2Component } from './comps/prof-settings-s2/prof-settings-s2.component';
import { SubOptionTierComponent } from './comps/re-usable/sub-option-tier/sub-option-tier.component';
import { ProfSettingsS3Component } from './comps/prof-settings-s3/prof-settings-s3.component';
import { EditAccountNameComponent } from './comps/edit-account-name/edit-account-name.component';
@NgModule({
  declarations: [
    ProfileSettingsComponent,
    ProfSettingsS1Component,
    EditAccountDataComponent,
    OptionTierComponent,
    ProfSettingsS2Component,
    SubOptionTierComponent,
    ProfSettingsS3Component,
    EditAccountNameComponent,
  ],
  imports: [CommonModule, EditProfileRoutingModule, SharedModule],
})
export class EditProfileModule {}

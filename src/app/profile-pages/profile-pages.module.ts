import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePagesRoutingModule } from './profile-pages-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, SharedModule, ProfilePagesRoutingModule],
})
export class ProfilePagesModule {}

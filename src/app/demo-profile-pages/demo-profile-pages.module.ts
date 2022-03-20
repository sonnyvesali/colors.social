import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoProfilePagesRoutingModule } from './demo-profile-pages-routing.module';
import { DemoProfilePageComponent } from './demo-profile-page/demo-profile-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DemoProfilePageComponent],
  imports: [CommonModule, SharedModule, DemoProfilePagesRoutingModule],
})
export class DemoProfilePagesModule {}

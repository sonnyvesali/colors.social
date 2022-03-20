import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { ProjectCardsModule } from 'src/app/project-cards/project-cards.module';
import { LandingPageComponent } from './comps/landing-page/landing-page.component';
@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    LandingPageRoutingModule,
    ProjectCardsModule,
  ],
})
export class LandingPageModule {}

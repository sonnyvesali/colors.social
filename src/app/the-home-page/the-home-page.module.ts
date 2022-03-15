import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheHomePageRoutingModule } from './the-home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectCardsModule } from '../project-cards/project-cards.module';
@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectCardsModule,
    TheHomePageRoutingModule,
  ],
})
export class TheHomePageModule {}

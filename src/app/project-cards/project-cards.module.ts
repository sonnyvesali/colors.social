import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from '../shared/shared.module';
import { TheHomePageModule } from '../the-home-page.module';
@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, SharedModule, TheHomePageModule],
  exports: [ProjectCardComponent],
})
export class ProjectCardsModule {}

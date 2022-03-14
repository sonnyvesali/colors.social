import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProjectCardComponent],
})
export class ProjectCardsModule {}

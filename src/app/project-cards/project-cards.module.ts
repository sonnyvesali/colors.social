import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from '../shared/shared.module';
import { DemoProjectCardComponent } from './demo-project-card/demo-project-card.component';
@NgModule({
  declarations: [ProjectCardComponent, DemoProjectCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProjectCardComponent, DemoProjectCardComponent],
})
export class ProjectCardsModule {}

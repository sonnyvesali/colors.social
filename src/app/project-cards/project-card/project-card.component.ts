import { Component, OnInit } from '@angular/core';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
import { ProjectCardService } from '../services/project-card.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor(
    public ProjectCardService: ProjectCardService,
    mixpanel: MixpanelService
  ) {}

  ngOnInit(): void {
    this.ProjectCardService.queryPublicProjects();
  }

  userProjectMatch() {}
}

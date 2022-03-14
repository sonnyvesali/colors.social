import { Component, OnInit } from '@angular/core';
import { ProjectCardService } from '../services/project-card.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor(public ProjectCardService: ProjectCardService) {}

  ngOnInit(): void {
    this.ProjectCardService.queryPublicProjects();
  }
}

import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/the-home-page/home-page.service';
import { ProjectCardService } from '../services/project-card.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor(
    public ProjectCardService: ProjectCardService,
    public HomePageService: HomePageService
  ) {}

  ngOnInit(): void {
    this.ProjectCardService.queryPublicProjects();
  }
}

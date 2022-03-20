import { Component, OnInit } from '@angular/core';
import { ProjectCardService } from '../services/project-card.service';

@Component({
  selector: 'app-demo-project-card',
  templateUrl: './demo-project-card.component.html',
  styleUrls: ['./demo-project-card.component.scss'],
})
export class DemoProjectCardComponent implements OnInit {
  constructor(public ProjectCardService: ProjectCardService) {}

  //get the service but this time query demo projects!!

  ngOnInit(): void {
    this.ProjectCardService.queryDemo();
  }
}

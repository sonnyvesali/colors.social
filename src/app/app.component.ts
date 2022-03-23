import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MixpanelService } from './services/analytics/mixpanel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'colors-v1.4.1';
  constructor(private MixPanel: MixpanelService) {}

  ngOnInit(): void {
    this.MixPanel.init();
  }
}

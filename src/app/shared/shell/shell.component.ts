import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isHandset: Observable<boolean> = this.BreakpointObserver.observe([
    Breakpoints.Handset,
  ]).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  isLoggedIn: boolean = false;
  username: string = 'Sonny Vesali';

  ngOnInit(): void {
    this.UserAndProjectInfo.hasUserPaid();
  }

  constructor(
    private BreakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth,
    public UserAndProjectInfo: UserAndProjectInfoService,
    public mixPanel: MixpanelService
  ) {}
}

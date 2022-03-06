import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  isHandset: Observable<boolean> = this.BreakpointObserver.observe([
    Breakpoints.Handset,
  ]).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  isLoggedIn: boolean = false;
  username: string = 'Sonny Vesali';

  //what does the constructor do? Use for dependency injection like the bp observer
  constructor(
    private BreakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth
  ) {}
}

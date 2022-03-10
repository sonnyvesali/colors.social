import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserAndProjectInfoService } from '../services/user-info/user-and-project-info.service';

@Injectable({
  providedIn: 'root',
})
export class LoginRedirectGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    private userInfoService: UserAndProjectInfoService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userInfoService.userDoc$.pipe(
      take(1),
      map((user: any) => user.profileCreated),
      tap((profBool) => {
        if (profBool === false) {
          this.router.navigate(['/user', 'register']);
        } else {
          this.router.navigate(['/']);
        }
      })
    );
  }
}

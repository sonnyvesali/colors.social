import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { UserAndProjectInfoService } from '../services/user-info/user-and-project-info.service';

@Injectable({
  providedIn: 'root',
})
export class ChangeEmailGuard implements CanActivate {
  constructor(
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
      map((user: any) => user.wantsToChangeEmail),
      tap((emailBool) => {
        if (emailBool === false) {
          this.router.navigate(['/edit-profile']);
        }
      })
    );
  }
}

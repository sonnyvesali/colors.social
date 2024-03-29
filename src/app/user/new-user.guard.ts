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
export class NewUserGuard implements CanActivate {
  constructor(
    private userInfoService: UserAndProjectInfoService,
    private router: Router
  ) {}
  //let's take it one piece of code at a time, when we know the re-direct works
  // we'll then figure out how to guard this router
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return this.userInfoService.userDoc$.pipe(
    //   take(1),
    //   map((user: any) => user.profileCreated),
    //   tap((profBool) => {
    //     if (profBool === true) {
    //       console.log(profBool, 'inner');
    //       this.router.navigate(['/user', 'login']);
    //     }
    //   })
    // );
    return true;
  }
}

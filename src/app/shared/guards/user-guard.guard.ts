import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LandingService } from 'src/app/landing/services/landing.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private landingS: LandingService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.landingS.getUserDetails() != undefined;

    if (!isLoggedIn) {
      return this.router.navigate(['/landing/login'], {
        queryParams: {
          authNeeded: 1
        }
      })
    } else {
      return true
    }
  }

}

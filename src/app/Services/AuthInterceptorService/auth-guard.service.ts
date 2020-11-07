import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
// import { ConfigService } from '@ngx-config/core';
// import { AuthenticationService } from './authentication.service';
// import { Authentication } from '../../../models';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  private previousUrl: string = undefined;
  private shadowPages = ['road-map', 'ecom-kit', 'theme-selector', 'locations-map'];

  constructor(
   // private authService: AuthenticationService, 
   // private config: ConfigService,
    private router: Router, 
    ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(`/${route.path}`);
  }

  private checkLogin(url: string): boolean {
    const auth_token = JSON.parse(localStorage.getItem('auth-token'));
    const auth_user = JSON.parse(localStorage.getItem('auth-user'));


    if (!auth_token || !moment().isBefore(auth_token.expires)) {
     // this.authService.logout();
      this.router.navigate(['/auth/login']);
      return false;
    }
   
    return true;
  }

}

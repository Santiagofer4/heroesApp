import {  ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, tap, switchMap, of } from 'rxjs';
import { inject } from '@angular/core';

const checkAuthStatus = (): boolean | Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
 
  return authService.checkAuthentication().pipe(
 
    tap( ( isAuthenticated ) => { if ( isAuthenticated ) { router.navigate(['/heroes/list'])} }),
    switchMap( isAuthenticated => { return of(!isAuthenticated) })
  )
}

export const canMatchPublicGuard: CanMatchFn = ( route: Route, segments: UrlSegment[] ) => {
  // console.log('CanMatch');
  // console.log({ route, segments });
 
  return checkAuthStatus()
};


export const canActivatePublicGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  // console.log( 'CanActivate' );
  // console.log({ route, state });
 
  return checkAuthStatus()
};

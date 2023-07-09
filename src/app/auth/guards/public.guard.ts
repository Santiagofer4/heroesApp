import {  ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, tap, map } from 'rxjs';
import { inject } from '@angular/core';


const checkAuthStatusforPublicGuard = (): boolean | Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
 
  return authService.checkAuthentication().pipe(
 
    tap( isAuthenticated => { if ( isAuthenticated ) { router.navigate(['/heroes/list'])} }),
    map( isAuthenticated => !isAuthenticated ),
  )
}


export const canMatchPublicGuard: CanMatchFn = ( route: Route, segments: UrlSegment[] ) => {

  return checkAuthStatusforPublicGuard()
};


export const canActivatePublicGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {

  return checkAuthStatusforPublicGuard()
};

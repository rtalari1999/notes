import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, CanDeactivateFn, Router, UrlTree } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  localStorage.getItem('isLoggedIn');
  const router = inject(Router)
  if( localStorage.getItem('isLoggedIn') == 'true'){
    debugger
    return true;
  } else{
    router.navigate(['/not-found'])
  }
  return true;
};

export const authGuardChild: CanActivateChildFn = (route, state) => {
  localStorage.getItem('isLoggedIn');
  const router = inject(Router)
  if( localStorage.getItem('isLoggedIn') == 'true'){
    debugger
    return true;
  } else{
    router.navigate(['/not-found'])
  }
  return true;
};
export type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}
export const authDeactivate: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
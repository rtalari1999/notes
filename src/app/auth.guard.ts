import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

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

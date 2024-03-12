import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './guards/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  debugger
  const router = inject(Router)
  let loggedIn = inject(AuthService).isAuthenticated();
  let login = localStorage.getItem('isLoggedIn')

  console.log('loggedIn',loggedIn )
  if(login === "true"){
    return true

  }else{
    router.navigate(['/'])
  }
  return loggedIn;
};

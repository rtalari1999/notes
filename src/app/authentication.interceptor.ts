import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { routes } from './app.routes';
import { Router } from '@angular/router';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('req.url', req.url);
  const authreq = req.clone({
    headers:req.headers.set('course', 'Angular+++')
  })
  if(req.url == 'http://localhost:3000/ProductList'){
    
  }
  console.log('req.url', authreq);
  return next(authreq);
};

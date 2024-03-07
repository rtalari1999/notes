import { HttpInterceptorFn } from '@angular/common/http';

export const interceptionInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interception', req.url)
  debugger
  return next(req);
};

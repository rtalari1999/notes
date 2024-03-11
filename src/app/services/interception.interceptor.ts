import { HttpInterceptorFn } from '@angular/common/http';

export const interceptionInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interception', req.url)
  debugger
const authReq = req.clone({
  headers: req.headers.set('Authorization', 'Bearer the token'),
})
  return next(req);
};

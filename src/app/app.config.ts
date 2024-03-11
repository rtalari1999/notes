import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { interceptionInterceptor } from './services/interception.interceptor';
import { authenticationInterceptor } from './services/authentication.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule),provideHttpClient(withInterceptors([
    interceptionInterceptor, authenticationInterceptor
  ]))]
};

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { ErrorInterceptor } from './interceptor/error.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  provideHttpClient(
    withInterceptorsFromDi()
  ), provideAnimations(), // Required for toast animations
  provideToastr({
    timeOut: 5000, // Duration in milliseconds
    positionClass: 'toast-bottom-right', // Position of the toast
    preventDuplicates: true, // Optional: Prevent duplicate toasts
  }),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
]
};

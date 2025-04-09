import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { AppConfig } from './shared/config/app-config';
import { NgxSpinnerModule } from 'ngx-spinner';

export const APP_CONFIG = new InjectionToken<typeof AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => AppConfig,
});

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  importProvidersFrom(BrowserAnimationsModule), // Required for animations
  importProvidersFrom(NgxSpinnerModule), // Required for loading spinner
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
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },
  { provide: APP_CONFIG, useValue: AppConfig },
  ],
};

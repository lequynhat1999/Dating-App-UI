import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideHttpClient(), provideAnimations(), // Required for toast animations
    provideToastr({
      timeOut: 5000, // Duration in milliseconds
      positionClass: 'toast-bottom-right', // Position of the toast
      preventDuplicates: true, // Optional: Prevent duplicate toasts
    }),]
};

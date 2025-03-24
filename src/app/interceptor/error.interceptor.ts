// filepath: d:\Coding\.NET Project\Dating App\DatingUI\DatingApp\src\app\interceptor\error.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('ErrorInterceptor caught an error:', error); // Add this line
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        switch (error.status) {
          case 401:
            // Unauthorized error
            this.router.navigate(['/login']);
            break;
          case 404:
            // Not found error
            this.router.navigate(['/not-found']);
            break;
          default:
            // Other errors
            break;
        }

        // Log the error (you can also use a logging service)
        console.error(errorMessage);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
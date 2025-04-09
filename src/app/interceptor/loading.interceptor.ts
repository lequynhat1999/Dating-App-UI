import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { LoadingService } from '../loading.service';
import { delay, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    this.loadingService.show();
    return next.handle(request).pipe(
        delay(2000), // Optional: Add a delay for demonstration purposes
      finalize(() => this.loadingService.hide())
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseURL = '';
  controller = '';
  private config = inject(APP_CONFIG, { optional: true });
  constructor(public http: HttpClient) {
    if (this.config) {
      this.baseURL = this.config.baseURL;
    }
  }

  generateURL(): string {
    if (this.controller) {
      return `${this.baseURL}/${this.controller}`
    }
    return this.baseURL;
  }
}

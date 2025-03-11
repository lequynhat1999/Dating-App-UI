import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseURL = 'https://localhost:7016/api';
  controller = ''
  constructor(public http: HttpClient) {}

  generateURL(): string {
    if(this.controller){
      return `${this.baseURL}/${this.controller}`
    }
    return this.baseURL;
  }
}

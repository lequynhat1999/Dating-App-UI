import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from '../shared/models/user.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  override controller: string = 'account';
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(http: HttpClient) {
    super(http);
  }

  login(data: any) {
    return this.http.post(`${this.generateURL()}/login`, data)
    .pipe(map((res: any) => {
      if(res.IsSuccess && res.Data){
        localStorage.setItem('Login_Account', JSON.stringify(res.Data));
        this.currentUserSource.next(res.Data);
      }
      return res;
    }));
  }

  register(data: any){
    return this.http.post(`${this.generateURL()}/register`, data);
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('Login_Account');
    this.currentUserSource.next(null);
  }
}
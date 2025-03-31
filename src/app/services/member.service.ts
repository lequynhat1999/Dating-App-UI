import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceResponse } from '../shared/models/service-response.model';
import { BaseService } from './base.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${JSON.parse(localStorage.getItem('Login_Account')!).Token}`
//   }),
// }

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService {
  override controller: string = 'User';
  constructor(http: HttpClient) {
    super(http);
  }

  getAllMember() {
    return this.http.get<ServiceResponse>(`${this.generateURL()}/v2`);
  }

  getMemberByUserName(username: string) {
    return this.http.get<ServiceResponse>(`${this.generateURL()}/${username}`);
  }

  getMemberById(id: number){
    return this.http.get<ServiceResponse>(`${this.generateURL()}/get-by-id/${id}`);
  }
}

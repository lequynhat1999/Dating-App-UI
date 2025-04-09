import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceResponse } from '../shared/models/service-response.model';
import { Member } from '../shared/models/member.model';
import { BaseService } from './base.service';

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

  updateMember(member: Member) {
    return this.http.put<ServiceResponse>(`${this.generateURL()}/update-profile`, member);
  }
}

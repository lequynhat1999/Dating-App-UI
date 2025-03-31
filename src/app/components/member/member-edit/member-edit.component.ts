import { Component, OnInit, Injectable } from '@angular/core';
import { Member } from '../../../shared/models/member.model';
import { MemberService } from '../../../services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
@Injectable()
export class MemberEditComponent implements OnInit {
  member: Member | undefined;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = JSON.parse(localStorage.getItem('Login_Account')!).UserName;
    if (!username) return;
    this.memberService.getMemberByUserName(username).subscribe(res => {
      if(res && res.Data){
        this.member = res.Data;
      }
    });
  }
}

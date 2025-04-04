import { Component, OnInit, Injectable } from '@angular/core';
import { Member } from '../../../shared/models/member.model';
import { MemberService } from '../../../services/member.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, CommonModule, MatSelectModule],
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  member: Member | undefined; // Revert member initialization to undefined

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

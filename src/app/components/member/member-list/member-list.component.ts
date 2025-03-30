import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../shared/models/member.model';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from '../member-card/member-card.component';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  imports: [CommonModule, MemberCardComponent]
})
export class MemberListComponent implements OnInit {

  members!: Member[];

  constructor(private memberSV: MemberService) { }

  ngOnInit() {
    this.getAllMember();
  }

  getAllMember(){
    this.memberSV.getAllMember().subscribe(data => {
      if(data.IsSuccess && data.Data){
        this.members = data.Data;
      }
    });
  }
}

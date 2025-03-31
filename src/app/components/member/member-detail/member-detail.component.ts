import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../shared/models/member.model';
import { CapitalizeFirstLetterPipe } from '../../../shared/pipes/capitalize-first-letter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
  imports: [CapitalizeFirstLetterPipe, MatIconModule, RouterLink, CommonModule],
  standalone: true
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  isFullScreen = false;

  private route = inject(ActivatedRoute);
  private memberService = inject(MemberService);

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.memberService.getMemberById(Number(id)).subscribe(response => {
        this.member = response.Data;
      });
    }
  }

  openFullScreen() {
    this.isFullScreen = true;
  }

  closeFullScreen() {
    this.isFullScreen = false;
  }
}

import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Member } from '../../../shared/models/member.model';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  @Input() member!: Member;
  overlayVisible = false;

  showOverlay() {
    this.overlayVisible = true;
  }

  hideOverlay() {
    this.overlayVisible = false;
  }
}

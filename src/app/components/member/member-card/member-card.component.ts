import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Member } from '../../../shared/models/member.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatTooltipModule, RouterModule],
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

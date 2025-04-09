import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../shared/models/member.model';
import { ToastrService } from 'ngx-toastr';
import { CanComponentDeactivate } from '../../../guards/can-deactivate.guard';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, CommonModule, MatSelectModule],
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit, CanComponentDeactivate {
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent) {
    if (this.hasUnsavedChanges()) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  member: Member | undefined;
  memberClone: Member | undefined;

  constructor(private memberService: MemberService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = JSON.parse(localStorage.getItem('Login_Account')!).UserName;
    if (!username) return;
    this.memberService.getMemberByUserName(username).subscribe(res => {
      if (res && res.Data) {
        this.member = res.Data;
        this.memberClone = cloneDeep(res.Data);
      }
    });
  }

  saveChanges() {
    this.memberService.updateMember(this.member!).subscribe(res =>{
      if (res && res.IsSuccess) {
        this.toastr.success('Member updated successfully!');
        this.memberClone = cloneDeep(this.member);
      } else {
        this.toastr.error(res.ErrorMessage || 'Failed to update member!');
      }
    })
  }

  hasUnsavedChanges(): boolean {
    return JSON.stringify(this.member) !== JSON.stringify(this.memberClone);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { User } from '../../shared/models/user.model';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatCardModule,
    MatMenuModule,
    MatMenuTrigger,
    CommonModule,
  ],
})
export class NavbarComponent implements OnInit {
  title = 'Chat App';
  currentUser!: User;
  currentUser$!: Observable<User | null>;
  constructor(private router: Router, private accountSV: AccountService) {}

  ngOnInit() {
    this.currentUser$ = this.accountSV.currentUser$;
  }

  logout() {
    this.accountSV.logout();
    this.router.navigate(['login']);
  }
}

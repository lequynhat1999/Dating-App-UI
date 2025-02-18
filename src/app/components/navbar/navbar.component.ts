import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatSidenav, MatSidenavContainer, MatSidenavContent],
})
export class NavbarComponent implements OnInit {

  title = 'DatingApp';

  constructor() { }

  ngOnInit() {
  }

}

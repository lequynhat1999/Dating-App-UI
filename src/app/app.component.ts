import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { User } from './shared/models/user.model';
import { AccountService } from './services/account.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isHideNavbar = true;
  constructor(private router: Router, private accountSV: AccountService) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url = window.location.href;
        this.isHideNavbar = url.includes('login');
      }
    });
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('Login_Account')!);
    this.accountSV.setCurrentUser(user);
  }
}

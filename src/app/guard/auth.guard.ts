import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.accountService.currentUser$.pipe(map(currentUser => {
      if (currentUser) {
        return true;
      } else {
        this.toastr.error("You don't have permission");
        this.router.navigate(['/login']);
        return false;
      }
    }));
  }
}
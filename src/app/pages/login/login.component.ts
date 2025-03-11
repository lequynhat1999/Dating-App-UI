import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { merge } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { FormMode } from '../../shared/enums/form-mode.enum';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent implements OnInit {
  formModeEnum = FormMode;
  formMode: FormMode = this.formModeEnum.Login;
  readonly username = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  errorMessageUsername = signal('');
  errorMessagePassword = signal('');
  objectLogin = {
    username: '',
    password: '',
  };

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit() {

    merge(this.username.statusChanges, this.username.valueChanges).subscribe(
      () => this.updateErrorMessageUserName()
    );
    merge(this.username.statusChanges, this.username.valueChanges).subscribe(
      () => this.updateErrorMessagePassword()
    );
  }

  updateErrorMessageUserName() {
    if (this.username.hasError('required')) {
      this.errorMessageUsername.set('You must enter a value');
    } else {
      this.errorMessageUsername.set('');
    }
  }

  updateErrorMessagePassword() {
    if (this.password.hasError('required')) {
      this.errorMessagePassword.set('You must enter a value');
    } else {
      this.errorMessagePassword.set('');
    }
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  handleOpenFormRegister() {
    this.formMode = this.formModeEnum.Register;
  }

  handleOpenFormLogin() {
    this.formMode = this.formModeEnum.Login;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
  }

  login() {
    this.accountService.login(this.objectLogin).subscribe((res: any) => {
      if (res.IsSuccess) {
        this.router.navigate(['/']);
      } else {
        this.username.setErrors({ invalid: true });
        this.errorMessageUsername.set('Invalid username or password');
        this.password.setErrors({ invalid: true });
        this.errorMessagePassword.set('Invalid username or password');
      }
    });
  }

  ngOnDestroy() {
  }
}

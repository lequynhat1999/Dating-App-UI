import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormMode } from '../../shared/enums/form-mode.enum';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatDividerModule, MatButtonModule, CommonModule]
})
export class LoginComponent implements OnInit {
  formModeEnum = FormMode;
  formMode: FormMode = this.formModeEnum.Login;

  constructor() { }

  ngOnInit() {
  }

  handleOpenFormRegister(){
    this.formMode = this.formModeEnum.Register;
  }

  handleOpenFormLogin(){
    this.formMode = this.formModeEnum.Login;
  }

}

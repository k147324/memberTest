import { Register } from './../register/register';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = { username: '', password: '' };
  errorMessage = '';
  login() {
    this.errorMessage = this.loginData.password + this.loginData.username;
  }
}

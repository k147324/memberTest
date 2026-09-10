import { Register } from './../register/register';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { HttpClient } from '@angular/common/http';
import { UserInfoDTO } from '../../interfaces/UserInfoDTO';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private http: HttpClient) {}
  baseURL: string = 'https://localhost:7058/api';
  loginData = { username: '', password: '' };
  errorMessage = '';
  login() {
    let data: UserInfoDTO = {
      Username: this.loginData.username,
      Password: this.loginData.password,
      Email:'',
    }
    this.http.post<any>(`${this.baseURL}/UserAPI/Login`, data).subscribe({
      next: (res) => {
        console.log('登入成功', res);
        console.log('Token:', res.token);
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('登入失敗', err);
        this.errorMessage = err.error?.message || '登入失敗,請稍後再試';
      },
    });
  }
}

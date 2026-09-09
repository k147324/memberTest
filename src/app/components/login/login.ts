import { Register } from './../register/register';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { HttpClient } from '@angular/common/http';
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
    const payload = {
      userName: this.loginData.username,
      email: null,
      password: this.loginData.password,
    };
    this.http.post<any>(`${this.baseURL}/UserAPI/Login`, payload).subscribe({
      next: (res) => {
        console.log('登入成功', res);
        console.log('Token:', res.token); // 先在 console 看 token 長什麼樣子

        // 之後要記得存起來,這裡先簡單測試
        //localStorage.setItem('token', res.token);

        this.errorMessage = '';
      },
      error: (err) => {
        console.error('登入失敗', err);
        this.errorMessage = err.error?.message || '登入失敗,請稍後再試';
      },
    });
  }
}

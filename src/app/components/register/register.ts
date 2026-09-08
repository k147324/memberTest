import { Component, inject } from '@angular/core';
import { Form, FormsModule, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserRegisterDTO } from '../../interfaces/UserRegisterDTO';
import { register } from 'module';
@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private http: HttpClient) {}
  baseURL: string = 'https://localhost:7058/api';
  private fb = inject(FormBuilder);
  registerData = this.fb.nonNullable.group({
    fUserName: ['', Validators.required],
    fPassword: ['', Validators.required],
    fEmail: ['', Validators.required],
    fPhone: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
    fAddress: ['', [Validators.required]],
    fIdNum: ['', [Validators.required, Validators.pattern(/^[A-Z][1289]\d{8}$/)]],
  });

  Register() {
    if (this.registerData.invalid) {
      this.registerData.markAllAsTouched();
      return;
    }

    const data: UserRegisterDTO = this.registerData.getRawValue();

    console.log('送出的資料：', data);

    this.http.post('https://localhost:7058/api/UserAPI/Register', data).subscribe({
      next: (response) => {
        console.log('API 回傳：', response);
      },
      error: (error) => {
        console.error('API 錯誤：', error);
      },
    });
  }
}

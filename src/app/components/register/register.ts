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
  constructor(private http:HttpClient){}
  baseURL: string = 'https://localhost:7058';
  private fb = inject(FormBuilder);
  registerData = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
    address: ['',[Validators.required]],
    idnum: ['', [Validators.required, Validators.pattern('^[A-Z][1289]\d{8}$')]],
  });

  Register() {
    if (this.registerData.invalid) {
      this.registerData.markAllAsTouched();
      return;
    }
    this.http.post(this.baseURL+"/register",)
    //this.http.post<Any[]>(this.baseURL + "/register");
  }
}

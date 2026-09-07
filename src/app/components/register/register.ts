import { Component, inject } from '@angular/core';
import { Form, FormsModule, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  baseURL: string = 'https://localhost:7058';
  private fb = inject(FormBuilder);
  registerData = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern('^09[0-9]{8}$')]],
    address: [''],
    idnum: ['', [Validators.required, Validators.pattern('^[A-Z][0-9]{9}$')]],
  });
  Register() {
    if (this.registerData.invalid) {
      this.registerData.markAllAsTouched();
      return;
    }
    console.log(this.registerData.value);
  }
}

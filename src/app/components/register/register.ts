import { Component, inject } from '@angular/core';
import { Form, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validator, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);
  registerData = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required, Validators.pattern('^09[0-9]{8}$')],
    address: this.fb.group({
      city: [''],
      region: [''],
      street: [''],
      detail: [''],
    }),
    idnum: ['', Validators.required, Validators.pattern('^[A-Z][0-9]{9}$')],
  });
  Register() {}
}

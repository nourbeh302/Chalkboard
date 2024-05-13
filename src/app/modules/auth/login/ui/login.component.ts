import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  async onSubmit() {
    this.userService.login(this.emailControl.value, this.passwordControl.value);
  }

  get emailControl(): AbstractControl {
    return this.loginForm.get('email')!;
  }

  get passwordControl(): AbstractControl {
    return this.loginForm.get('password')!;
  }
}

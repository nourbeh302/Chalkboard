import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);

  registerForm = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  async onSubmit() {
    this.userService.register(
      this.emailControl.value,
      this.displayNameControl.value,
      this.passwordControl.value
    );
  }

  get emailControl(): AbstractControl {
    return this.registerForm.get('email')!;
  }

  get displayNameControl(): AbstractControl {
    return this.registerForm.get('displayName')!;
  }

  get passwordControl(): AbstractControl {
    return this.registerForm.get('password')!;
  }
}

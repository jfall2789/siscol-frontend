import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { AuthService } from '../../../core/auth/auth.service';
import { TokenService } from '../../../core/auth/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class Login {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly tokenService = inject(TokenService);
  private readonly snackBar = inject(MatSnackBar);

  hidePassword = true;

  loading = false;

  loginForm = this.fb.nonNullable.group({

    email: [

      '',

      [

        Validators.required,

        Validators.email

      ]

    ],

    password: [

      '',

      [

        Validators.required,

        Validators.minLength(6)

      ]

    ]

  });

  login(): void {

    if (this.loading) {
      return;
    }

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }

    this.loading = true;

    this.authService.login(this.loginForm.getRawValue())

      .subscribe({

        next: response => {

          this.tokenService.saveToken(response.token);

          this.loading = false;

          this.snackBar.open(

            'Bienvenido a SISCOL',

            'Cerrar',

            {

              duration: 3000,

              horizontalPosition: 'end',

              verticalPosition: 'top'

            }

          );

          this.router.navigate(['/dashboard']);

        },

        error: () => {

          this.loading = false;

          this.snackBar.open(

            'Correo o contraseña incorrectos.',

            'Cerrar',

            {

              duration: 4000,

              horizontalPosition: 'end',

              verticalPosition: 'top'

            }

          );

        }

      });

  }

  get email() {

    return this.loginForm.controls.email;

  }

  get password() {

    return this.loginForm.controls.password;

  }

}
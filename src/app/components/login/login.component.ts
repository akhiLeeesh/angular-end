import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';
import { StudentAuthService } from '../../services/student-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @Input() userType: 'admin' | 'user' = 'user';
  loginForm!: FormGroup;

  loading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminAuthService: AdminAuthService,
    private studentAuthService: StudentAuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember_me: [false]
    });
  }

  // onSubmit(): void {


  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;

  //   if (this.userType === 'admin') {
  //     this.loading = true;
  //     this.adminAuthService.login(email, password).subscribe(success => {
  //       if (success) {
  //         this.loading = false;
  //         this.router.navigate(['/admin-dashboard'])

  //       } else {
  //         alert('Invalid admin credentials');
  //         this.loading = false;
  //       }
  //     });
  //   } else {
  //     this.studentAuthService.login(email, password).subscribe(success => {
  //       console.log('test1')
  //       if (success) {
  //         this.loading = true;
  //         console.log(success)
  //         this.router.navigate(['/user-dashboard'])
  //         console.log('test2')
  //       } else {
  //         alert('Invalid admin credentials')
  //         console.log('test3')


  //       }
  //     });
  //   }
  // }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.loading = true;

    if (this.userType === 'admin') {
      this.adminAuthService.login(email, password).subscribe({
        next: (success) => {
          this.loading = false;
          if (success) {
            this.router.navigate(['/admin-dashboard']);
          } else {
            alert('Invalid admin credentials');
          }
        },
        error: (err) => {
          this.loading = false;
          const errorMessage = err.error?.message || 'Login failed. Please try again.';
          alert(errorMessage);
        }
      });
    } else {
      this.studentAuthService.login(email, password).subscribe({
        next: (success) => {
          this.loading = false;
          if (success) {
            this.router.navigate(['/user-dashboard']);
          } else {
            alert('Invalid student credentials');
          }
        },
        error: (err) => {
          this.loading = false;
          // Extract the specific error message from the API response
          const errorMessage = err.error?.message || 'Login failed. Please try again.';
          alert(errorMessage); // This will show "Invalid password" from your API
        }
      });
    }
  }

}
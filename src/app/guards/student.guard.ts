import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StudentAuthService } from '../services/student-auth.service';


@Injectable({ providedIn: 'root' })
export class StudentGuard implements CanActivate {
  constructor(private authService: StudentAuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/user']);
      return false;
    }
    return true;
  }
}
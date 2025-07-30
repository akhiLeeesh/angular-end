
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentAuthService {
  private readonly TOKEN_KEY = 'student_token';

  private uri = '/api';

  //  private uri = 'http://localhost:5500/api';



  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.uri}/student/login`, { email, password }).pipe(
      tap(res => {
        if (res && res.token) {
          this.setToken(res.token);
          this.startTokenExpirationWatcher();
        }
      })
    );
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  // student-auth.service.ts
  startTokenExpirationWatcher() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // convert to ms
      const timeout = expiry - Date.now();

      if (timeout > 0) {
        setTimeout(() => {
          this.logout(); // auto logout
          alert('Session expired. Please log in again.');
        }, timeout);
      } else {
        this.logout(); // token already expired
      }

    } catch (err) {
      this.logout(); // token is invalid
    }
  }


  // Get own profile using token
  getStudentProfile(): Observable<any> {
    const token = localStorage.getItem('student_token');
    const headers = new HttpHeaders().set('Authorization', token || '');
    return this.http.get(`${this.uri}/student/me`, { headers });
  }



}

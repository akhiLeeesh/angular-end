
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private readonly TOKEN_KEY = 'admin_token';

  // private uri = 'https://lms.nexmindsolutions.com/5500/api'
  // private uri = 'https://lms.nexmindsolutions.com:5500/api';
  private uri = '/api';

  // private uri = 'http://localhost:5500/api';





  constructor(private http: HttpClient, private router: Router) { }




  // private apiUrl = 'api/reviews';


  getReviews() {
    return this.http.get<any[]>(this.uri + '/reviews');
  }

  postReview(data: any) {
    return this.http.post(this.uri + '/reviews', data);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.uri}/admin/login`, { email, password }).pipe(
      tap(res => {
        if (res && res.token) {
          this.setToken(res.token);
          this.startTokenExpirationWatcher()
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

  // admin-auth.service.ts
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




  addStudent(token: string, studentData: any) {
    const headers = {
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    };
    return this.http.post<any>(`${this.uri}/admin/students`, studentData, { headers });
  }


  getAllStudents(adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `${adminToken}`
    });
    return this.http.get(`${this.uri}/admin/students`, { headers });
  }


  updateStudent(id: string, studentData: any, token: string) {
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.http.put<any>(`${this.uri}/admin/student/${id}`, studentData, { headers });
  }

  demoregisterdstudents() {
    return this.http.get(`${this.uri}/demo/register`);

  }


  demoRegistrationFormSubmit(data: any) {
    return this.http.post(`${this.uri}/demo/register`, data)
  }




}

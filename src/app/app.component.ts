import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from './services/student-auth.service';
import { AdminAuthService } from './services/admin-auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nexmind_lms';
  static instance: AppComponent; // static instance

  constructor(
    private studentAuthService: StudentAuthService,
    private adminAuthService: AdminAuthService,
    private router: Router,
    private http: HttpClient // added
  ) {
    AppComponent.instance = this; // set static reference

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 200); // delay allows DOM to render fully before scroll
    });
  }

  ngOnInit(): void {
    this.studentAuthService.startTokenExpirationWatcher();
    this.adminAuthService.startTokenExpirationWatcher();
    if (this.studentAuthService.isLoggedIn()) {
      this.router.navigate(['/user-dashboard']);
    } else if (this.adminAuthService.isLoggedIn()) {
      this.router.navigate(['/admin-dashboard']);
    }
  }

  // ✅ Simple backend call method
  getCourses() {
    this.http.get('http://localhost:5000/api/courses')
      .subscribe(
        (data) => {
          console.log('Courses from backend:', data);
          alert(JSON.stringify(data)); // for simple testing
        },
        (error) => {
          console.error('Error fetching courses:', error);
        }
      );
  }
}

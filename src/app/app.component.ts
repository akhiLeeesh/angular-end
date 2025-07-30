import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from './services/student-auth.service';
import { AdminAuthService } from './services/admin-auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nexmind_lms';


  constructor(
    private studentAuthService: StudentAuthService,
    private adminAuthService: AdminAuthService,
    private router: Router
  ) {  this.router.events.pipe(
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

}

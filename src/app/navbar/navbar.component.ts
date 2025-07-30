import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component'; // ✅ Import AppComponent

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mobileNavActive = false;
  scrolled = false;
  activeIndex: number | null = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    
    this.scrolled = window.scrollY > 50;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      form.resetForm();
    } else {
      console.warn('Form is invalid');
    }
  }

  navigateToLogin(): void {
    this.closeMobileNav();
    this.router.navigate(['/user']);
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMobileNav();

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 200);
      });
    } else {
      this.performScroll(sectionId);
    }
  }

  performScroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileNav() {
    this.mobileNavActive = !this.mobileNavActive;
  }

  closeMobileNav() {
    this.mobileNavActive = false;
  }

  // ✅ Backend trigger from Navbar
  callBackend() {
    AppComponent.instance.getCourses(); // 👈 direct call to AppComponent
  }
}

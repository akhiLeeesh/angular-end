import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      form.resetForm();
    } else {
      console.warn('Form is invalid');
    }
  }
  // con-end
  mobileNavActive = false;
  scrolled = false;

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  // toggleMobileNav(): void {
  //   this.mobileNavActive = !this.mobileNavActive;
  //   this.toggleBodyOverflow();
  // }

  // closeMobileNav(): void {
  //   this.mobileNavActive = false;
  //   this.toggleBodyOverflow();
  // }

  private toggleBodyOverflow(): void {
    document.body.style.overflow = this.mobileNavActive ? 'hidden' : '';
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
        // Delay to ensure page loads and DOM is ready
        setTimeout(() => {
          this.performScroll(sectionId);
        }, 200); // may adjust timing
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


  activeIndex: number | null = 0;
}

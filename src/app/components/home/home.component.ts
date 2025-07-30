import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobileNavActive = false;
  scrolled = false;

  // ➤ Carousel Data
  courses = [
    {
      title: 'Generative AI',
      image: 'assets/img/about/role2.jpg',
      description: 'ChatGPT, Prompting, LLMs',
      route: '/gen-ai'
    },
    {
      title: 'Data Science',
      image: 'assets/img/about/role1.jpg',
      description: 'Python, R, Visualization',
      route: '/datascience'
    },
    {
      title: 'Full Stack Development',
      image: 'assets/img/about/role3.jpg',
      description: 'Angular, Node, MongoDB',
      route: '/fullstack'
    },
    {
      title: 'Software Testing',
      image: 'assets/img/about/role4.jpg',
      description: 'Manual & Automation',
      route: '/testing'
    }
  ];

  visibleCourses: any[] = [];
  currentIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateVisibleCourses();
  }

  // ➤ Scroll Detection
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
  }

  // ➤ Mobile Nav Toggle
  toggleMobileNav(): void {
    this.mobileNavActive = !this.mobileNavActive;
    this.toggleBodyOverflow();
  }

  closeMobileNav(): void {
    this.mobileNavActive = false;
    this.toggleBodyOverflow();
  }

  private toggleBodyOverflow(): void {
    document.body.style.overflow = this.mobileNavActive ? 'hidden' : '';
  }

  // ➤ Login Navigation
  navigateToLogin(): void {
    this.closeMobileNav();
    this.router.navigate(['/user']);
  }

  // ➤ Course Navigation via Know More button
  goToCourse(route: string): void {
    this.router.navigate([route]);
  }

  // ➤ Carousel Slide Functions
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 2) % this.courses.length;
    this.updateVisibleCourses();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 2 + this.courses.length) % this.courses.length;
    this.updateVisibleCourses();
  }

  updateVisibleCourses(): void {
    const total = this.courses.length;
    const end = this.currentIndex + 2;

    if (end <= total) {
      this.visibleCourses = this.courses.slice(this.currentIndex, end);
    } else {
      const firstPart = this.courses.slice(this.currentIndex, total);
      const secondPart = this.courses.slice(0, end - total);
      this.visibleCourses = firstPart.concat(secondPart);
    }
  }

  // ➤ Contact Form Submission
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      form.resetForm();
    } else {
      console.warn('Form is invalid');
    }
  }

  // ➤ FAQ Section Logic
  activeIndex: number | null = 0;

  faqs = [
    {
      question: 'What types of internships do you offer?',
      answer: 'We offer internships in web development, frontend/backend engineering, UI/UX design, and more, with real-world projects and mentor support.'
    },
    {
      question: 'How do the live projects work?',
      answer: 'Our live projects involve working on actual client briefs or simulated startups. You’ll experience the full development process in team-based settings.'
    },
    {
      question: 'Is there any certification provided?',
      answer: 'Yes, you’ll receive a certification after completing the internship or training module, which you can showcase on your resume or LinkedIn.'
    },
    {
      question: 'Do I need any prior coding experience?',
      answer: 'Not at all! We start from the basics and gradually build up to complex projects. Mentors are available to help at every step.'
    },
    {
      question: 'What technologies will I learn?',
      answer: 'You\'ll get hands-on with HTML, CSS, JavaScript, Angular, React, Node.js, MongoDB, Git, APIs, and more. Our training is practical and project-based.'
    }
  ];

  toggleFAQ(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

// tools start 
  tools = [
    { name: 'HTML5', icon: 'https://c0.klipartz.com/pngpicture/555/192/gratis-png-sitio-web-de-iconos-de-computadora-html-dibujo-html5.png' },
    { name: 'CSS3', icon: 'https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp' },
    { name: 'JavaScript', icon: 'https://img.favpng.com/4/6/23/javascript-logo-html-clip-art-png-favpng-agPRXbqGjQypHtbvJ0Qcxg4K5.jpg' },
    { name: 'Angular', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qAb3e9auwnxJ1RmaypTdsieWkl2wb4u3cg&s' },
    { name: 'Node.js', icon: 'https://www.mindrops.com/images/nodejs-image.webp' },
    { name: 'Express', icon: 'https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png' },
    { name: 'MongoDB', icon: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
    { name: 'MySQL', icon: 'https://www.ovhcloud.com/sites/default/files/styles/large_screens_1x/public/2021-09/ECX-1909_Hero_MySQL_600x400%402x-1.png' },
    { name: 'GitHub', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s' },
    { name: 'Docker', icon: 'https://miro.medium.com/v2/resize:fit:336/1*glD7bNJG3SlO0_xNmSGPcQ.png' },
  ];
// intership
  internships = [
    {
      title: 'Mean Stack Development',
      tagline: 'Live & Scalable Sites',
      description: 'Frontend+Backend+Database',
      image: 'https://miro.medium.com/v2/resize:fit:725/1*P8aGpuAxcVXgO4m7cByVtA.jpeg'
    },
    {
      title: 'Mern Stack Development',
      tagline: 'Core for our Learning',
      description: 'Dataset+Model+Deployment',
      image: 'https://miro.medium.com/v2/resize:fit:540/1*BgcUXqrJV7xNofAFWDrCkw.png'
    },
    {
      title: 'Digital Marketing',
      tagline: 'Growth-focused Approach',
      description: 'Email+SEO+Social Media',
      image: 'https://digifame.in/wp-content/uploads/2024/09/DM_blog_post_image_03_guetzli.jpg'
    },
    {
      title: 'UI/UX with Angular',
      tagline: 'Clean Responsive Designs',
      description: 'CSS+UX Research+Designing',
      image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid&w=740'
    }
  ];
}

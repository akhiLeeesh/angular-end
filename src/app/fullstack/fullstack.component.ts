import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../services/admin-auth.service';


declare let bootstrap: any;

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css']
})
export class FullstackComponent {


  registerFormData = {
    name: '',
    email: '',
    phone: '',
    course: ''
  };

  demoForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private formsubmit: AdminAuthService) { }
  ngOnInit(): void {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      course: ['Full Stack Development', Validators.required],
      date: ['03/07/2025', Validators.required]
    });
  }


  get f() {
    return this.demoForm.controls;
  }


  onSubmitDemoForm(): void {
    this.submitted = true;

    if (this.demoForm.valid) {

      this.formsubmit.demoRegistrationFormSubmit(this.demoForm.value).subscribe(res => {
        const response = res as { message: string, data: any };
        alert(`${response.message}`);

      })
      // Reset form
      this.demoForm.reset({
        course: 'Full Stack Development',
        date: '03/07/2025'
      });
      this.submitted = false;

      // Hide the modal
      const modalEl = document.getElementById('demoModal');
      if (modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modalInstance.hide();
      }
    } else {
      console.warn('Form is invalid');
    }
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'https://nexmind-syllabus.s3.ap-south-1.amazonaws.com/Full_Stack-course_guide.pdf';
    link.download = 'FullstackBroucher-NM.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  // Handle register form submission
  onSubmitRegisterForm() {
    console.log('Register Form Data:', this.registerFormData);
    alert('Registration Submitted Successfully!');

    const modal = document.getElementById('registerModal');
    const modalInstance = (window as any).bootstrap.Modal.getInstance(modal as Element);
    modalInstance?.hide();

    // Reset form
    this.registerFormData = {
      name: '',
      email: '',
      phone: '',
      course: ''
    };
  }


  showFeatures = false;

  toggleFeatures() {
    this.showFeatures = true;
  }

  features = [
    {
      title: '📜 Certificate',
      desc: 'Get a certificate to showcase your skills.',
      color: 'bg-light-blue'
    },
    {
      title: '📂 Downloadable Materials',
      desc: 'Access notes, PDFs, and practice files.',
      color: 'bg-light-green'
    },
    {
      title: '👨‍🏫 1-on-1 Mentorship',
      desc: 'Talk to mentors and get personal guidance.',
      color: 'bg-light-orange'
    },
    {
      title: '💬 Peer Community',
      desc: 'Join forums and chat groups with other learners.',
      color: 'bg-light-yellow'
    },
    {
      title: '📝 Assignments',
      desc: 'Practice with weekly assignments and quizzes.',
      color: 'bg-light-purple'
    },
    {
      title: '🎥 Live Doubt Sessions',
      desc: 'Clear your doubts in live online sessions.',
      color: 'bg-light-cyan'
    },
    {
      title: '🧪 Capstone Project',
      desc: 'Work on a real-world final project.',
      color: 'bg-light-pink'
    },
    {
      title: '💼 Resume + Job Help',
      desc: 'Get help with resume, interviews, and referrals.',
      color: 'bg-light-gray'
    },
    {
      title: '✉️ Instructor Access',
      desc: 'Directly message instructors for help.',
      color: 'bg-light-navy text-light'
    }
  ];

  reviews = [
    {
      name: 'Kondeti Kalyan Roy',
      course: 'Full Stack Development',
      rating: 5,
      comment: 'NexMind provides excellent support and industry-ready skills. Loved the practical sessions!'
    },
    {
      name: 'Anjali Mehta',
      course: 'Data Science',
      rating: 4,
      comment: 'Great depth in machine learning and real-time projects. The support team is responsive too.'
    },
    {
      name: 'Ravi Teja',
      course: 'Software Testing',
      rating: 5,
      comment: 'Helped me crack my first job in testing. Everything was taught in a simple and effective way.'
    },
    {
      name: 'Sneha Reddy',
      course: 'Data Science',
      rating: 5,
      comment: 'The best hands-on experience I’ve had. Capstone project really boosted my resume.'
    },
    {
      name: 'Arjun Menon',
      course: 'Full Stack Development',
      rating: 4,
      comment: 'Concepts were taught clearly and examples were industry-relevant. Mentors were helpful.'
    },
    {
      name: 'Divya Sharma',
      course: 'Software Testing',
      rating: 5,
      comment: 'Simple and effective teaching method. Best course to start your testing career.'
    },
    {
      name: 'Nikhil Jain',
      course: 'Full Stack Development',
      rating: 5,
      comment: 'Great structure and career guidance. I got placed after completing the course!'
    },
    {
      name: 'Priya Das',
      course: 'Data Science',
      rating: 4,
      comment: 'Loved the course. Some modules were challenging but worth it. Very satisfied overall.'
    },
    {
      name: 'Sandeep Kumar',
      course: 'Software Testing',
      rating: 5,
      comment: 'The live projects helped me gain confidence. Excellent value for money!'
    },
    {
      name: 'Meera Nair',
      course: 'Full Stack Development',
      rating: 5,
      comment: 'This course changed my career. From non-tech to developer — thanks NexMind!'
    }
  ];
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  get repeatedReviews() {
    return [...this.reviews, ...this.reviews]; // duplicates reviews for seamless scroll
  }
}

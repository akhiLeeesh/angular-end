import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../services/admin-auth.service';



declare let bootstrap: any;
@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrls: ['./datascience.component.css']
})
export class DatascienceComponent {
  // Form data for demo and register modals



  constructor(private fb: FormBuilder, private adminservice: AdminAuthService) { }
  demoForm!: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      course: ['Datascience', Validators.required],
      date: ['03/07/2025', Validators.required]
    });
  }
  // registerFormData = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   course: ''
  // };
  // Handle demo form submission
  // onSubmitDemoForm() {
  //   const modal = document.getElementById('demoModal');
  //   const modalInstance = (window as any).bootstrap.Modal.getInstance(modal as Element);
  //   modalInstance?.hide();
  //   // Reset form
  //   // this.demoFormData = {
  //   //   name: '',
  //   //   email: '',
  //   //   phone: '',
  //   //   course: ''
  //   // };

  //   this.adminservice.demoRegistrationFormSubmit(this.demoFormData).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //     }, error(err) {
  //       console.log(err.message)
  //     }
  //   })
  // }
  // Handle register form submission
  // onSubmitRegisterForm() {
  //   console.log('Register Form Data:', this.registerFormData);
  //   alert('Registration Submitted Successfully!');
  //   const modal = document.getElementById('registerModal');
  //   const modalInstance = (window as any).bootstrap.Modal.getInstance(modal as Element);
  //   modalInstance?.hide();
  //   // Reset form
  //   this.registerFormData = {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     course: ''
  //   };
  // }


  get f() {
    return this.demoForm.controls;
  }

  onSubmitDemoForm(): void {
    this.submitted = true;

    if (this.demoForm.valid) {


      this.adminservice.demoRegistrationFormSubmit(this.demoForm.value).subscribe(res => {
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
    link.href = 'https://nexmind-syllabus.s3.ap-south-1.amazonaws.com/DataAnalytics-course_guide.pdf';
    link.download = 'FullstackBroucher-NM.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  dsFeatures = [
    {
      icon: '📜',
      title: 'Completion Certificate',
      desc: 'Earn a certificate after course completion to boost your profile.',
      color: 'bg-feature-1'
    },
    {
      icon: '📊',
      title: 'Real Projects',
      desc: 'Work on real datasets like sales, health, and customer analytics.',
      color: 'bg-feature-2'
    },
    {
      icon: '🧠',
      title: 'ML & AI Concepts',
      desc: 'Understand machine learning models, neural networks, and AI tools.',
      color: 'bg-feature-3'
    },
    {
      icon: '📥',
      title: 'Downloadable Notebooks',
      desc: 'Access downloadable Python notebooks for practice.',
      color: 'bg-feature-4'
    },
    {
      icon: '🤝',
      title: 'Mentorship',
      desc: 'Get guidance and feedback from data science experts.',
      color: 'bg-feature-5'
    },
    {
      icon: '💬',
      title: 'Live Discussions',
      desc: 'Attend live sessions and Q&A rounds weekly.',
      color: 'bg-feature-6'
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












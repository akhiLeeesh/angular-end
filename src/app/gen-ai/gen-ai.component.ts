// import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AdminAuthService } from '../services/admin-auth.service';

// declare let bootstrap: any;
// @Component({
//   selector: 'app-gen-ai',
//   templateUrl: './gen-ai.component.html',
//   styleUrls: ['./gen-ai.component.css']
// })
// export class GenAiComponent {

//   demoForm!: FormGroup;
//   submitted = false;


//   genAiFeatures = [
//     {
//       icon: '🧠',
//       title: 'LLMs & Transformers',
//       desc: 'Learn how Large Language Models and Transformers power tools like ChatGPT and Bard.',
//       color: 'bg-orange'
//     },
//     {
//       icon: '📝',
//       title: 'Prompt Engineering',
//       desc: 'Design effective prompts to control AI outputs for writing, summarization, coding, and more.',
//       color: 'bg-blue'
//     },
//     {
//       icon: '🖼️',
//       title: 'Image Generation',
//       desc: 'Use tools like DALL·E and Midjourney to generate AI art and visuals from text.',
//       color: 'bg-green'
//     },
//     {
//       icon: '🔗',
//       title: 'LangChain & Vector DBs',
//       desc: 'Build chatbots with memory and context using LangChain, Pinecone, and FAISS.',
//       color: 'bg-purple'
//     },
//     {
//       icon: '⚙️',
//       title: 'API Integration',
//       desc: 'Integrate OpenAI API into websites and applications for real-world AI-powered tools.',
//       color: 'bg-teal'
//     },
//     {
//       icon: '🔐',
//       title: 'Ethics & Safety',
//       desc: 'Understand the ethical use of AI, bias prevention, and responsible deployment.',
//       color: 'bg-indigo'
//     }

//   ];

//   reviews = [
//     {
//       name: 'Kondeti Kalyan Roy',
//       course: 'Full Stack Development',
//       rating: 5,
//       comment: 'NexMind provides excellent support and industry-ready skills. Loved the practical sessions!'
//     },
//     {
//       name: 'Anjali Mehta',
//       course: 'Data Science',
//       rating: 4,
//       comment: 'Great depth in machine learning and real-time projects. The support team is responsive too.'
//     },
//     {
//       name: 'Ravi Teja',
//       course: 'Software Testing',
//       rating: 5,
//       comment: 'Helped me crack my first job in testing. Everything was taught in a simple and effective way.'
//     },
//     {
//       name: 'Sneha Reddy',
//       course: 'Data Science',
//       rating: 5,
//       comment: 'The best hands-on experience I’ve had. Capstone project really boosted my resume.'
//     },
//     {
//       name: 'Arjun Menon',
//       course: 'Full Stack Development',
//       rating: 4,
//       comment: 'Concepts were taught clearly and examples were industry-relevant. Mentors were helpful.'
//     },
//     {
//       name: 'Divya Sharma',
//       course: 'Software Testing',
//       rating: 5,
//       comment: 'Simple and effective teaching method. Best course to start your testing career.'
//     },
//     {
//       name: 'Nikhil Jain',
//       course: 'Full Stack Development',
//       rating: 5,
//       comment: 'Great structure and career guidance. I got placed after completing the course!'
//     },
//     {
//       name: 'Priya Das',
//       course: 'Data Science',
//       rating: 4,
//       comment: 'Loved the course. Some modules were challenging but worth it. Very satisfied overall'
//     },
//     {
//       name: 'Sandeep Kumar',
//       course: 'Software Testing',
//       rating: 5,
//       comment: 'The live projects helped me gain confidence. Excellent value for money!'
//     },
//     {
//       name: 'Meera Nair',
//       course: 'Full Stack Development',
//       rating: 5,
//       comment: 'This course changed my career. From non-tech to developer — thanks NexMind!'
//     }
//   ];
//   constructor(private fb: FormBuilder, private adminservice: AdminAuthService) { }

//   ngOnInit(): void {
//     this.demoForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       course: ['Generative AI', Validators.required],
//       date: ['07/07/2025', Validators.required]
//     });


//     this.loadReviews();
//     setInterval(() => this.autoScroll(), 4000); // every 4s
//   }



//   review: any[] = [];
//   currentRating = 0;
//   hoverRating = 0;
//   @ViewChild('reviewContainer') reviewContainer!: ElementRef;


//   reviewForm = this.fb.group({
//     name: ['', Validators.required],
//     message: ['', Validators.required],
//     rating: [0, Validators.required],
//   });



//   loadReviews() {
//     this.adminservice.getReviews().subscribe((res) => {
//       this.review = res;
//     });
//   }

//   setRating(r: number) {
//     this.currentRating = r;
//     this.reviewForm.get('rating')?.setValue(r);
//   }

//   submit() {
//     if (this.reviewForm.valid) {
//       this.adminservice.postReview(this.reviewForm.value).subscribe(() => {
//         this.reviewForm.reset();
//         alert('review submited sucessfully')
//         this.currentRating = 0;
//         this.loadReviews();
//       });
//     }
//   }

//   autoScroll() {
//     const container = this.reviewContainer?.nativeElement;
//     if (container && container.scrollHeight > container.clientHeight) {
//       container.scrollTop += 100;
//       if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
//         container.scrollTop = 0;
//       }
//     }
//   }







//   getStars(rating: number): number[] {
//     return Array(rating).fill(0);
//   }

//   get repeatedReviews() {
//     return [...this.reviews, ...this.reviews];
//   }

//   get f() {
//     return this.demoForm.controls;
//   }
//   onSubmitDemoForm(): void {
//     this.submitted = true;
//     if (this.demoForm.valid) {
//       this.adminservice.demoRegistrationFormSubmit(this.demoForm.value).subscribe(res => {
//         const response = res as { message: string, data: any };
//         alert(`${response.message}`);
//       })
//       // Reset form
//       this.demoForm.reset({
//         course: 'Full Stack Development',
//         date: '03/07/2025'
//       });
//       this.submitted = false;
//       // Hide the modal
//       const modalEl = document.getElementById('demoModal');
//       if (modalEl) {
//         const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
//         modalInstance.hide();
//       }
//     } else {
//       console.warn('Form is invalid');
//     }
//   }

//   downloadPDF() {
//     const link = document.createElement('a');
//     link.href = 'https://nexmind-syllabus.s3.ap-south-1.amazonaws.com/%F0%9F%93%A2+Welcome+to+NexMind+Software+Solutions!+(1).pdf';
//     link.download = 'FullstackBroucher-NM.pdf';
//     link.target = '_blank';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }










// }

import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../services/admin-auth.service';

declare let bootstrap: any;

@Component({
  selector: 'app-gen-ai',
  templateUrl: './gen-ai.component.html',
  styleUrls: ['./gen-ai.component.css']
})
export class GenAiComponent implements OnInit {
  demoForm!: FormGroup;
  reviewForm!: FormGroup;
  submitted = false;

  @ViewChild('reviewContainer') reviewContainer!: ElementRef;

  reviews: any[] = []; // fetched from backend
  currentRating = 0;
  hoverRating = 0;

  constructor(private fb: FormBuilder, private adminservice: AdminAuthService) { }

  ngOnInit(): void {
    this.initForms();
    this.loadReviews();
    setInterval(() => this.autoScroll(), 5000); // scroll every 5s
  }

  // Initialize both forms
  private initForms(): void {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      course: ['Generative AI', Validators.required],
      date: ['07/07/2025', Validators.required]
    });

    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      rating: [0, Validators.required]
    });
  }

  // Fetch reviews from backend
  loadReviews(): void {
    this.adminservice.getReviews().subscribe((res) => {
      this.reviews = res;
      const scrollDuration = this.reviews.length * 2; // 2s per card
      document.documentElement.style.setProperty('--scroll-speed', `${scrollDuration}s`);
    });
  }

  // Set star rating
  setRating(rating: number): void {
    this.currentRating = rating;
    this.reviewForm.get('rating')?.setValue(rating);
  }

  // Submit review
  submit(): void {
    if (this.reviewForm.valid) {
      this.adminservice.postReview(this.reviewForm.value).subscribe(() => {
        this.reviewForm.reset();
        this.currentRating = 0;
        alert('Review submitted successfully');
        this.loadReviews();
      });
    }
  }

  // Auto scroll reviews vertically (for small screens)
  autoScroll(): void {
    const container = this.reviewContainer?.nativeElement;
    if (container && container.scrollHeight > container.clientHeight) {
      container.scrollTop += 100;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTop = 0;
      }
    }
  }

  // Returns array for star loop
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  // Used to repeat reviews for infinite horizontal scroll
  get repeatedReviews(): any[] {
    return [...this.reviews, ...this.reviews];
  }

  // Form controls shortcut
  get f() {
    return this.demoForm.controls;
  }

  // Submit demo form
  onSubmitDemoForm(): void {
    this.submitted = true;
    if (this.demoForm.valid) {
      this.adminservice.demoRegistrationFormSubmit(this.demoForm.value).subscribe((res: any) => {
        alert(res.message);
      });

      this.demoForm.reset({
        course: 'Full Stack Development',
        date: '03/07/2025'
      });
      this.submitted = false;

      // Close modal
      const modalEl = document.getElementById('demoModal');
      if (modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modalInstance.hide();
      }
    } else {
      console.warn('Form is invalid');
    }
  }

  // Download brochure
  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = 'https://nexmind-syllabus.s3.ap-south-1.amazonaws.com/%F0%9F%93%A2+Welcome+to+NexMind+Software+Solutions!+(1).pdf';
    link.download = 'FullstackBroucher-NM.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Gen AI Feature List
  genAiFeatures = [
    {
      icon: '🧠',
      title: 'LLMs & Transformers',
      desc: 'Learn how Large Language Models and Transformers power tools like ChatGPT and Bard.',
      color: 'bg-orange'
    },
    {
      icon: '📝',
      title: 'Prompt Engineering',
      desc: 'Design effective prompts to control AI outputs for writing, summarization, coding, and more.',
      color: 'bg-blue'
    },
    {
      icon: '🖼️',
      title: 'Image Generation',
      desc: 'Use tools like DALL·E and Midjourney to generate AI art and visuals from text.',
      color: 'bg-green'
    },
    {
      icon: '🔗',
      title: 'LangChain & Vector DBs',
      desc: 'Build chatbots with memory and context using LangChain, Pinecone, and FAISS.',
      color: 'bg-purple'
    },
    {
      icon: '⚙️',
      title: 'API Integration',
      desc: 'Integrate OpenAI API into websites and applications for real-world AI-powered tools.',
      color: 'bg-teal'
    },
    {
      icon: '🔐',
      title: 'Ethics & Safety',
      desc: 'Understand the ethical use of AI, bias prevention, and responsible deployment.',
      color: 'bg-indigo'
    }
  ];
}

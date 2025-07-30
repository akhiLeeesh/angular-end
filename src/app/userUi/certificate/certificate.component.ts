import { Component } from '@angular/core';


@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
 showMyCourses = false;

  myCourses = [
    {
      title: 'Full-Stack Web Development',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLL5wEv6hFqb4fO49WaJVm__IfrD-TXcRZw&s',
      level: 'Beginner',
      type: 'Specialization'
    },
    {
      title: 'Responsive UI with Angular',
      imageUrl: 'https://aglowiditsolutions.com/wp-content/uploads/2021/04/Angular-Responsive-Design.png',
      level: 'Intermediate',
      type: 'Certificate'
    },
    {
      title: 'Backend with Spring Boot',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQyI0KhRzZ67u7gHvrD3hW4w5sIiqRh6oXA&s',
      level: 'Advanced',
      type: 'Professional Certificate'
    },
    {
      title: 'Full Stack Java Developer',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Professional Certificate',
      imageUrl: 'https://techamdavad.com/web/image/product.template/42/image_1024?unique=8bd84e5'
    },
    {
      title: 'Python for Beginners',
      provider: 'NexMind',
      level: 'Beginner',
      type: 'Certificate',
      imageUrl: 'https://datagy.io/wp-content/uploads/2022/01/01-Introduction-to-Python-Programming-Beginners-Guide-Cover-Image-e1641345507776-930x620.png'
    },
    {
      title: 'Advanced Java Programming',
      provider: 'NexMind',
      level: 'Advanced',
      type: 'Certificate',
      imageUrl: 'https://repository-images.githubusercontent.com/321777632/720ccd80-5ff5-11eb-9278-12bab4420782'
    },
    {
      title: 'AI & Machine Learning Fundamentals',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Certificate',
        
      imageUrl: 'https://basics-ai.com/assets/images/topics-aifundamentals/ai-fundamentals.webp'
    },
    {
      title: 'Cybersecurity Essentials',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Certificate',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0CaPCeropqGKEbDL5UUuhsCtKe9NySbmag&s'
    },
    
  ];
  student = {
    username: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+91 98765 43210',
    address: 'Hyderabad, Telangana',
    url: 'https://example.com/certificates/webdev-jane.pdf',
    // url:'',
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar7.png'
  };
  
  ngOnInit(): void {
    // No need to call getProfile()
  }
}

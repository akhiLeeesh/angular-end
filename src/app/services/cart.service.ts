import { Injectable } from '@angular/core';
interface Course {
  title: string;
  provider: string;
  level?: string;
  type?: string;
  progress: number;
  imageUrl: string;
  certificateUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

    courses: Course[] = [
    {
      title: 'Web Development Bootcamp',
      provider: 'NexMind',
      level: 'Beginner',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
    {
      title: 'Full Stack Java Developer',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Professional Certificate',
      progress: 100,


      imageUrl: 'https://techamdavad.com/web/image/product.template/42/image_1024?unique=8bd84e5',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
    {
      title: 'Python for Beginners',
      provider: 'NexMind',
      level: 'Beginner',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://datagy.io/wp-content/uploads/2022/01/01-Introduction-to-Python-Programming-Beginners-Guide-Cover-Image-e1641345507776-930x620.png',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
    {
      title: 'Advanced Java Programming',
      provider: 'NexMind',
      level: 'Advanced',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://repository-images.githubusercontent.com/321777632/720ccd80-5ff5-11eb-9278-12bab4420782',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
    {
      title: 'React + Node Full Stack',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
      {
      title: 'Cloud Computing with AWS & Azure',
      provider: 'NexMind',
      level: 'Advanced',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://daxg39y63pxwu.cloudfront.net/images/blog/aws-vs-azure-who-is-the-big-winner-in-the-cloud-war/AWS_vs_Azure_-_Which_cloud_is_the_best.webp',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
{
      title: 'AI & Machine Learning Fundamentals',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Certificate',
      progress: 70,
        
      imageUrl: 'https://basics-ai.com/assets/images/topics-aifundamentals/ai-fundamentals.webp',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
    {
      title: 'Cybersecurity Essentials',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0CaPCeropqGKEbDL5UUuhsCtKe9NySbmag&s',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
    {
      title: 'Data Science and Analytics',
      provider: 'NexMind',
      level: 'Intermediate',
      type: 'Certificate',
      progress: 70,

      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/635f79fbf214917bd2876e03/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
      certificateUrl: 'https://example.com/certificates/html-css-js.pdf'

    },
  ];

   popularCourses: Course[] = this.courses;
 private cart: any[] = [];

   constructor() {}

cartItems: Course[] = [];

getCartItems(): Course[] {
  return this.cartItems;
}

addToCart(course: Course): void {
  this.cartItems.push(course);
}



// cart.service.ts
removeFromCart(course: Course): void {
  this.cartItems = this.cartItems.filter(item => item.title !== course.title);
}
  getPopularCourses(): Course[] {
    return this.popularCourses;
  }


}

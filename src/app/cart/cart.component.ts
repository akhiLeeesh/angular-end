import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

interface Course {
  title: string;
  provider: string;
  level?: string;
  type?: string;
  progress: number;
  imageUrl: string;
  certificateUrl: string;
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
popularCourses: any;

  buyCourse(course: Course): void {
    alert(`Proceeding to buy: ${course.title}`);
  }
   cartItems: any[] = [];

  constructor(private cartService: CartService,) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  this.popularCourses = this.cartService.getPopularCourses();

   this.popularCourses = this.cartService.getPopularCourses();
  this.updateVisibleCourses();

  }
// cart.component.ts


  // totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);



get totalPrice(): number {
  return this.cartItems.length * 340; // Or actual price logic
}
removeFromCart(item: Course): void {
  this.cartService.removeFromCart(item);
  this.cartItems = this.cartService.getCartItems(); // update local copy
}
addToCart(item: Course): void {
  const exists = this.cartService.getCartItems().some(course => course.title === item.title);
  if (!exists) {
    this.cartService.addToCart(item);
  }
}


visibleCourses: Course[] = []; // shown on UI
showAll: boolean = false;



toggleShowAll(): void {
  this.showAll = !this.showAll;
  this.updateVisibleCourses();
}

updateVisibleCourses(): void {
  this.visibleCourses = this.showAll ? this.popularCourses : this.popularCourses.slice(0, 2);
}

showAllRecommended: boolean = false;

get displayedCourses() {
  return this.showAllRecommended ? this.popularCourses : this.popularCourses.slice(0, 2);
}

}

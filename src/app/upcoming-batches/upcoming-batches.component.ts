import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-batches',
  templateUrl: './upcoming-batches.component.html',
  styleUrls: ['./upcoming-batches.component.css']
})
export class UpcomingBatchesComponent implements AfterViewInit {
  @ViewChild('headingRef') headingRef!: ElementRef;

 @ViewChild('genaiInfoRef') genaiInfoRef!: ElementRef;
@ViewChild('genaiImageRef') genaiImageRef!: ElementRef;

@ViewChild('fullstackInfoRef') fullstackInfoRef!: ElementRef;
@ViewChild('fullstackImageRef') fullstackImageRef!: ElementRef;

@ViewChild('dataInfoRef') dataInfoRef!: ElementRef;
@ViewChild('dataImageRef') dataImageRef!: ElementRef;

@ViewChild('testingInfoRef') testingInfoRef!: ElementRef;
@ViewChild('testingImageRef') testingImageRef!: ElementRef;




  constructor(private router: Router) {}

ngAfterViewInit() {
  // Add slide-in-visible class manually for heading (because it's usually in view on load)
  if (this.headingRef?.nativeElement) {
    this.headingRef.nativeElement.classList.add('slide-in-visible');
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-visible');
      }
    });
  }, { threshold: 0.5 });

  const elements = [
   this.genaiInfoRef,
    this.genaiImageRef,
    this.fullstackInfoRef,
    this.fullstackImageRef,
    this.dataInfoRef,
    this.dataImageRef,
    this.testingInfoRef,
    this.testingImageRef
  ];
  elements.forEach(ref => {
    if (ref?.nativeElement) {
      observer.observe(ref.nativeElement);
    }
  });
}

  // ✅ Define this method
  goToGenAI() {
  this.router.navigate(['/gen-ai']);
}
 goToDataScience() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  this.router.navigate(['/datascience']);
}
  goToFullstack() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/fullstack']);
    
  }
  goToTesting() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
 this.router.navigate(['/testing']);
  }
}

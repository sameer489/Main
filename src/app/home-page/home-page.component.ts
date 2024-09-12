import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']  
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

    // -->
  images: string[] = ['/assets/flight6.jpg', '/assets/flight7.jpg','/assets/flight8.jpg'];
  currentImageIndex: number = 0;
  imageUrl: string = this.images[this.currentImageIndex];
 
  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.imageUrl = this.images[this.currentImageIndex];
    }, 2000); // Change image every 5 seconds
  }
// <--

  
}

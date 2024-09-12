import { Component, OnInit } from '@angular/core';
import { CheckInService } from '../check-in.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  
  checkinId: number = 0;
  bookingId: number | undefined;
  checkInStatus: boolean = true;
  seatNumber: number | undefined;
  availableSeats: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  message: string | undefined;

  constructor(
    private checkInService: CheckInService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.params['bookingId'];
  }

  onCheckIn(): void {
    const checkinData = {
      checkinId: this.checkinId,
      bookingId: this.bookingId,
      checkInStatus: this.checkInStatus,
      seatNumber: this.seatNumber
    };

    
    this.checkInService.checkIn(checkinData).subscribe({
      next: (response) => {
        this.message = "Check-in successful!";
        // this.router.navigate(['/booking']); 
      },
      error: (error) => {
        this.message = "Error: " + error.error.message;
      }
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ScheduleService } from '../schedule.service';
import { Router, ActivatedRoute } from '@angular/router';  
import { Schedule } from '../../Models/Schedule';
import { UserService } from '../user.service';

@Component({
  selector: 'app-booking-post',
  templateUrl: './booking-post.component.html',
  styleUrls: ['./booking-post.component.css']
})
export class BookingPostComponent implements OnInit {
  bookingId: number | null = null;
  userId: number | null = null;
  scheduleId: number | null = null;
  username = '';
  no_of_Sets: number | null = null;
  bookingDate: string | null = null;
  totalAmount: number = 0;
  useremail = '';
  fare: number = 0;  
  isSeatsExceeded: boolean = false;
  constructor(
    private bookingService: BookingService,
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,  
    private router: Router,
    private userService:UserService
  ) {}
  
  ngOnInit():void {
   
    this.route.queryParams.subscribe(params => {
      console.log("Query Params:", params);
      const param=params['id'];
      this.scheduleId=param?Number(param):null;
      if (this.scheduleId) {
        console.log("Schedule ID: ", this.scheduleId);
      } else {
        console.error("Invalid Schedule ID");
      }
    });
  }

  // calculateTotalAmount() {
  //   if (this.no_of_Sets && this.fare) {
  //     this.totalAmount = this.no_of_Sets * this.fare;
  //   } else {
  //     this.totalAmount = 0;
  //   }
  // }

  validateSeats() {
    if (this.no_of_Sets === null || this.no_of_Sets <= 0) {
      this.isSeatsExceeded = false; 
      this.totalAmount = 0; 
    } else {
      this.isSeatsExceeded = this.no_of_Sets > 4;
      if (!this.isSeatsExceeded) {
        this.calculateTotalAmount();
      }
    }
  }

  calculateTotalAmount() {
    if (this.no_of_Sets && this.no_of_Sets <= 4) {
      
      this.totalAmount = this.no_of_Sets * this.fare; 
    } else {
      this.totalAmount = 0;
    }
  }

  saveBooking() {
    if (this.scheduleId) {
      this.scheduleService.getSchedule(this.scheduleId).subscribe(
        (schedule: Schedule) => {
          const fare = schedule.fare; 
          this.totalAmount = this.no_of_Sets ? this.no_of_Sets * fare : 0;

            
          console.log(this.username)

          const bookingData = {
           
              userId: localStorage.getItem("userID"),
              
              scheduleId: this.scheduleId,
              name: this.username,
              bookingDate: new Date().toISOString(),
              no_of_Sets: this.no_of_Sets,
              totalAmount: this.totalAmount,
              email: this.useremail
          
          };
          console.log(this.bookingId)
          
           localStorage.setItem('bookingData', JSON.stringify(bookingData));

          
  
          this.bookingService.postBooking(bookingData).subscribe(
            (data:any) => {
              const bookingId = data.bookingId; 
              console.log("Booking successfully created");
              console.log(data)
              this.clearForm();
              this.router.navigate(['/payment'], { queryParams: { bookingId: bookingId } });
                
            },
            (error: any) => {
              console.log("Error creating booking", error);
            }
          );
        },
        (error: any) => {
          console.log("Error fetching schedule", error);
        }
      );
    } else {
      console.log("ScheduleId is required");
    }
  }
  

  clearForm() {
    this.bookingId = null;
    this.userId = null;
    this.scheduleId = null;
    this.username = '';
    this.no_of_Sets = null;
    this.bookingDate = null;
    this.totalAmount = 0;
    this.useremail = '';
  }
}

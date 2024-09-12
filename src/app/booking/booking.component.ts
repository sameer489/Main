// import { Component, OnInit } from '@angular/core';
// import { BookingService } from '../booking.service';

// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.css']
// })
// export class BookingComponent implements OnInit {
//   flights: any = null;
//   formHeader = "Add Booking";
//   name = '';
//   seatNumber: number | null = null;
//   showForm = false;
//   bookingId: number | null = null;
//   no_of_Sets: number | null = null;
//   email = '';
//   checkInDate: string | null = null;
//   checkInStatus: boolean = false;
//   totalAmount: number | null = null;
//   booking: any = null;

//   constructor(private bookingService: BookingService) { }

//   ngOnInit(): void {
//     this.getBooking();
//   }

//   getBooking() {
//     this.bookingService.getBooking().subscribe(
//       (data) => {
//         this.booking = data;
//         console.log("Bookings fetched successfully");
//       },
//       (error) => {
//         console.log("Error fetching bookings");
//       }
//     );
//   }

//   deleteBooking(id: number) {
//     this.bookingService.deleteBooking(id).subscribe(() => {
//       this.getBooking();
//     });
//   }

//   openForm(data: any = null) {
//     this.showForm = true;
//     if (data) {
//       this.name = data.name;
//       this.no_of_Sets = data.no_of_Sets;
//       this.seatNumber = data.seatNumber;
//       this.email = data.email;
//       this.checkInDate = data.checkInDate;
//       this.checkInStatus = data.checkInStatus;
//       this.totalAmount = data.totalAmount;
//       this.bookingId = data.bookingId;
//       this.formHeader = "Edit Booking";
//     } else {
//       this.clearForm();
//       this.formHeader = "Add Booking";
//     }
//   }

//   closeForm() {
//     this.showForm = false;
//     this.clearForm();
//   }

//   clearForm() {
//     this.name = "";
//     this.no_of_Sets = null;
//     this.seatNumber = null;
//     this.email = "";
//     this.checkInDate = null;
//     this.checkInStatus = false;
//     this.totalAmount = null;
//   }

//   saveFlight() {
//     this.showForm = false;

//     const body: any = {
//       name: this.name,
//       no_of_Sets: this.no_of_Sets,
//       seatNumber: this.seatNumber,
//       email: this.email,
//       checkInDate: this.checkInDate,
//       checkInStatus: this.checkInStatus,
//       totalAmount: this.totalAmount
//     };

//     if (this.bookingId) {
//       body['bookingId'] = this.bookingId;
//       this.bookingService.putBooking(this.bookingId, body).subscribe(() => {
//         this.getBooking();
//       });
//     } else {
//       this.bookingService.postBooking(body).subscribe(() => {
//         this.getBooking();
//       });
//     }
//   }
// }
//2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: any = null;
  formHeader = "Add Booking";
  name = '';
  no_of_Sets: number | null = null;
  email = '';
  bookingDate: string | null = null;
  totalAmount: number | null = null;
  bookingId: number | null = null;
  userId: number | null = null;
  scheduleId: number | null = null;
  showForm = false;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    
    this.getBooking();
    
  }
  // checkIn(booking: any) {
    
  //   booking.checkInStatus = true;
  //   alert('Check-in is successful');
  // }
  
  // canCheckIn(travelDate: string | Date): boolean {
  //   const currentDate = new Date();
  //   const travelDateTime = new Date(travelDate);
  //   const hoursDifference = (travelDateTime.getTime() - currentDate.getTime()) / (1000 * 60 * 60); // Convert milliseconds to hours

  //   return hoursDifference <= 24 && hoursDifference >= 0;
  // }
  // isPastDate(bookingDate: string): boolean {
  //   const today = new Date();
  //   const booking = new Date(bookingDate);
  //   return booking < today;
  // }



  checkIn(booking: any) {
    booking.checkInStatus = true;
    this.bookingService.putBooking(booking.bookingId, booking).subscribe(
      () => {
        alert('Check-in is successful');
        this.getBooking();  
      },
      (error) => {
        console.error('Error checking in:', error);
      }
    );
  }


  
  getBooking() {
    this.bookingService.getBooking().subscribe(
      (data) => {
        this.bookings = data;
       
        console.log("here started");

        console.log("Bookings fetched successfully");
        console.log(data);
      },
      (error) => {
        console.log("Error fetching bookings");
      }
    );
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.getBooking();
    });
  }

  openForm(data: any = null) {
    this.showForm = true;
    if (data) {
      this.name = data.name;
      this.no_of_Sets = data.no_of_Sets;
      this.email = data.email;
      this.bookingDate = data.bookingDate;
      this.totalAmount = data.totalAmount;
      this.bookingId = data.bookingId;
      this.userId = data.userId;
      this.scheduleId = data.scheduleId;
      this.formHeader = "Edit Booking";
    } else {
      this.clearForm();
      this.formHeader = "Add Booking";
    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.no_of_Sets = null;
    this.email = '';
    this.bookingDate = null;
    this.totalAmount = null;
    this.bookingId = null;
    this.userId = null;
    this.scheduleId = null;
  }

  saveBooking() {
    this.showForm = false;

    const body: any = {
      name: this.name,
      no_of_Sets: this.no_of_Sets,
      email: this.email,
      bookingDate: this.bookingDate,
      totalAmount: this.totalAmount,
      userId: this.userId,
      scheduleId: this.scheduleId
    };

    
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
//   private apiUrl = 'http://localhost:5132/api/Bookings'; 

//   constructor(private http:HttpClient) { }
//   getBooking()
//   {
//     return this.http.get(`${this.apiUrl}/current`);
//   }
//   deleteBooking(id:any)
//   {
//     return this.http.delete(this.apiUrl+"/"+id);
//   }
//   postBooking(body:any)
//   {
//     return this.http.post(this.apiUrl,body);
//   }
//   putBooking(id: any, body: any) {
//     return this.http.put(`${this.apiUrl}/${id}`, body);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
//   private apiUrl = 'http://localhost:5132/api/Bookings'; 

//   constructor(private http: HttpClient) { }

 

//   getBooking(): Observable<any> {
//     const token = localStorage.getItem('authToken');  // Retrieve the JWT token from local storage
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);  // Add token to the headers
//     return this.http.get(`${this.apiUrl}/current`,{headers});
//   }

//   deleteBooking(id: any): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }

//   postBooking(bookingData: any) {
//     console.log(bookingData)
//     return this.http.post('http://localhost:5132/api/Bookings/Ticket_Booking', bookingData);
   
//   }
  

//   putBooking(id: any, body: any): Observable<void> {
//     return this.http.put<void>(`${this.apiUrl}/${id}`, body);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:5132/api/Bookings'; 


  constructor(private http: HttpClient) { }

  getBooking(): Observable<any> {
    const token = localStorage.getItem('authToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);  
    return this.http.get(`${this.apiUrl}/current`, { headers });
  }

  deleteBooking(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  postBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Ticket_Booking`, bookingData);
  }
  
  putBooking(id: any, body: any): Observable<void> {
    const token = localStorage.getItem('authToken');  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);  
    return this.http.put<void>(`${this.apiUrl}/${id}`, body, { headers });
  }
}

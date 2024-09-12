import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{
  
    public schedules: any[] = []; 
    public error: string = '';   
    public startLocation: string = '';
    public destination: string = '';
    public travelDate: string = '';  
    public showResults: boolean = false;
    minDate: string | undefined;
    

    constructor(private scheduleService: ScheduleService,private http:Router) {}
  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }


    book(scheduleId: number) {
      if (localStorage.getItem('authToken')) {
        console.log(scheduleId);
        this.http.navigate(['/bookingpost', scheduleId], { queryParams: { id: scheduleId } });
      } else {
        localStorage.setItem('scheduleId', scheduleId.toString());
        this.http.navigate(['/userlogin']);
      }
    }
    
    onSubmit(): void {
      if (this.startLocation && this.destination && this.travelDate) {
        this.getSchedules(); 
        
      } else {
        this.error = 'Please fill in all required fields.';
        this.showResults = false;
      } 
    }
  
    getSchedules(): void {
      console.log('Fetching schedules for:', this.startLocation, this.destination, this.travelDate); // Log inputs
      this.scheduleService.searchFlights(this.startLocation, this.destination, this.travelDate)
        .subscribe(
          (data: any) => {
            if (data && data.length > 0) {
              this.schedules = data;
              this.error = '';
              this.showResults = true;
            } else {
              this.schedules = [];
              this.error = 'No flights available for the selected route and date.';
              this.showResults = false; 
            }
          },
          (error: any) => {
            this.error = ' startLocation and destination are not same';
            console.error('Error fetching schedule data', error);
            this.showResults = false;
          }
        );
    }
}


import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedulecurd',
  templateUrl: './schedulecurd.component.html',
  styleUrls: ['./schedulecurd.component.css']
})
export class SchedulecurdComponent implements OnInit{
  startLocation: any;
  travelDate: any;
  fare: any;
  schedule: any = null;
  formHeader = "Add schedule";
  destination: any;
  showForm = false;
  scheduleId: any;
  id: any = null;
  flightName: any;
  seatCapacity: any;
  arrivalTime: any;
  departureTime: any;

  constructor(private fs: ScheduleService) { }

  ngOnInit(): void {
    this.getschedule();
    
  }
  
 
  getschedule() {
    this.fs.getschedules().subscribe(
      (data) => {
        console.log("data:"+data);
        this.schedule = data;
        console.log("Schedule fetched successfully");
      },
      (error) => {
        console.log("No data received");
      }
    );
  }

  deleteschedule(id: number) {
    this.fs.deleteschedule(id).subscribe(() => {
      this.getschedule();
    });
  }

  openForm(data: any = null)
  
  {
    
    this.showForm = true;
    if (data) {
      this.startLocation = data.startLocation;
      this.destination = data.destination;
      this.id = data.scheduleId;
      this.travelDate = data.travelDate;
      this.fare = data.fare;
      this.scheduleId = data.scheduleId;
      this.flightName = data.flightName;
      this.seatCapacity = data.seatCapacity;
      this.arrivalTime = data.arrivalTime;
      this.departureTime = data.departureTime;
      this.formHeader = "Edit schedule";
    } else {
      this.clearForm();
      this.id = null;
      this.formHeader = "Add schedule";
    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.startLocation = "";
    this.destination = "";
    this.travelDate = "";
    this.fare = "";
    this.scheduleId = "";
    this.flightName = "";
    this.seatCapacity = "";
    this.arrivalTime = "";
    this.departureTime = "";
  }
  saveFlight() {
    this.showForm = false;

    let body: any = {
        flightName: this.flightName,  
        seatCapacity: parseInt(this.seatCapacity, 10),  
        startLocation: this.startLocation,  
        destination: this.destination,  
        travelDate: this.travelDate,  
        arrivalTime: this.arrivalTime,  
        departureTime: this.departureTime,  
        fare: parseFloat(this.fare)  
    };

    if (this.id) {
        body['scheduleId'] = this.id;
        this.fs.putschedule(this.id, body).subscribe(
            () => this.getschedule(),
            error => console.log('Error updating schedule:', error)
        );
    } else {
        this.fs.postschedule(body).subscribe(
            () =>
            {
              this.getschedule()
            },
               
            (error) =>
              {
                console.log('Error adding schedule:', error)
              } 
        );
    }
}

}

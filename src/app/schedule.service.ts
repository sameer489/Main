import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../Models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  
  private apiUrl = 'http://localhost:5132/api/Schedules';
  
  constructor(private http: HttpClient) { }
 
 
  searchFlights(startLocation: string, destination: string, travelDate: string): Observable<any> {
    const params = new HttpParams()
      .set('startLocation', startLocation)
      .set('destination', destination)
      .set('travelDate', travelDate);
  
    return this.http.get<any>(`${this.apiUrl}/Source/Destination`, { params });
  }
  getSchedule(scheduleId: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.apiUrl}/${scheduleId}`);
  }

  getschedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl);
  }

  deleteschedule(id:any)
  {
    return this.http.delete(this.apiUrl+"/"+id);
  }
  postschedule(body:any)
  {
    return this.http.post(this.apiUrl,body);
  }
  putschedule(id: any, body: any) {
    return this.http.put(`${this.apiUrl}/${id}`, body);
  }

}

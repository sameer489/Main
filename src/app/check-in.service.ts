import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  apiUrl='http://localhost:5132/api/checkin';
  constructor(private http:HttpClient) { }

  getdata()
  {
    return this.http.get(this.apiUrl);
  }

  checkIn(checkinData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, checkinData);
  }

  postcheckin(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

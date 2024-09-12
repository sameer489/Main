import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl='http://localhost:5132/api/Admins';
  constructor(private http: HttpClient) { }
  adminlogin(adminlogin: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Admin-Login`, adminlogin);
  }

}

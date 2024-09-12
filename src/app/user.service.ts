import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin:boolean=true;
  private apiUrl='http://localhost:5132/api/Users';
  
  constructor(private http: HttpClient) { }

  getusers()
  {
    return this.http.get(`${this.apiUrl}`);
  }

  deleteuser(id: any): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  userlogin(userlogin: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Login`, userlogin);
  }
  userregistration(userregistration: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Register`, userregistration);
  }
  isLoggedIn(): boolean {
    
    return !!localStorage.getItem('authToken');
  }

  
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  
  logout(): void {
    this.isLoggedin=true;
    window.alert("You have been logged out successfully.");
    //  const confirmLogout = window.confirm("Do you want to logout?");
    localStorage.removeItem('authToken');
    // localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userID');
    localStorage.removeItem('role');
  }
 




}
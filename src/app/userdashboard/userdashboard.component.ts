import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor(private router:Router){}

  // username=localStorage.getItem("username")

  // logout() {
  //   const confirmLogout = window.confirm("Do you want to logout?");
   
  //   if (confirmLogout) {
  //     localStorage.removeItem('authToken');
  //     localStorage.removeItem('jwtToken');
  //     localStorage.removeItem('username');
  //     localStorage.removeItem('userID');
  //     localStorage.removeItem('role');
  //     this.router.navigate(['/']);
  //   } else {
  //     console.log('Logout cancelled by user.');
  //   }
  // }
}

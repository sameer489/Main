
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedin: boolean = false;

  userRole: string | null = null;

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isLoggedin = !!localStorage.getItem('role');
      this.userRole = localStorage.getItem('role');
    }
  }

  logout() {
    this.userservice.logout();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('role');
    }
    this.isLoggedin = false;
    this.router.navigate(['/']); 
  }

  home() {
    this.router.navigate(['/Schedule']);
  }

  register() {
    this.router.navigate(['/userregistration']);
  }

  login() {
    this.router.navigate(['/userlogin']);
  }
}

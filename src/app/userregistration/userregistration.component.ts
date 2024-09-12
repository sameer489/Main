import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  dob: any;
  age: any;
constructor(private userService:UserService,private router:Router){}
ngOnInit(): void{}
show(r: NgForm) {
  if (r.valid) {
    this.userService.userregistration(r.value).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/userlogin']);
        
      },
      (error) => {
        console.error('Registration failed', error);
        
      }
    );
  } else {
    console.log('Form is not valid');
    
  }
}
calculateAge() {
  if (this.dob) {
    const birthDate = new Date(this.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth month hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.age = age;
  }
}
}


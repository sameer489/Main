import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  constructor(private http:AdminService,private router:Router){}
  data: string ='';
  b:any;
  ngOnInit(): void {}
    show(f: NgForm) {
  if (f.valid) {
    const adminData = {
      userName: f.value.userName,
      password: f.value.password
    };
    this.http.adminlogin(adminData).subscribe(
      response => {
        console.log('Admin Login successful', response);
        window.alert("You have been Log in successfully.");
        localStorage.setItem("role", response.role);
         this.b=response.role
        //  this.isAdmin = true;
        console.log('333333333333333333333333333333333'+this.b)
        const token = response.token; 
        if (token) {
           localStorage.setItem('authToken', token); 
           
          this.router.navigate(['admindashboard']);
  }
   else {
    console.error('Token not received');
    this.data = 'Admin Login failed';
  }
},
error => {
  console.error(' Admin Login failed', error);
  this.data = 'Username or Password is incorrect';
}
);
} else {
  console.error('Form is invalid');
  this.data = 'Please enter valid credentials';
}
}
 

}

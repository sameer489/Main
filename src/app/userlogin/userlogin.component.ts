import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  data: string = '';
  id: number | null = null;

  constructor(
    private http: UserService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
  }
  

  show(f: NgForm) {
    if (f.valid) {
      const loginData = {
        userName: f.value.userName,
        password: f.value.password
      };

      localStorage.setItem("username", loginData.userName);

      this.http.userlogin(loginData).subscribe(
        (response: any) => {
          console.log('Login successful', response);
          window.alert("You have been Log in successfully.");
          localStorage.setItem("userID", response.user_id);
          localStorage.setItem("role", response.role);

            const role=response.role
            console.log('22222222222222222222222222222222'+role)
          const token = response.token; 
          console.log(token);

          if (token) {
            this.http.storeToken(token);

            const scheduleId = localStorage.getItem('scheduleId');
            if (scheduleId) {
              this.router.navigate(['/bookingpost', scheduleId], { queryParams: { id: scheduleId } });
                localStorage.removeItem('scheduleId'); 
              }
              else {
                
               this.router.navigate(['/userdashboard']);
    
                
              }
          } 
          else {
            console.error('Token not received');
            this.data = 'Login failed';
          }
        },
        error => {
          console.error('Login failed', error);
          this.data = 'Username or Password is incorrect';
        }
      );
    } else {
      console.error('Form is invalid');
      this.data = 'Please enter valid credentials';
    }
  }
}

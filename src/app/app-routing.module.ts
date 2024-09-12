import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BookingComponent } from './booking/booking.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { SchedulecurdComponent } from './schedulecurd/schedulecurd.component';
import { BookingPostComponent } from './booking-post/booking-post.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CheckInComponent } from './check-in/check-in.component';
import { authGuard } from './auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes:Routes=[
  {
    path:'',component:ScheduleComponent
  },
  {
    path:'userlogin/:{scheduleId}',component:UserloginComponent
  },
  {
    path:'userlogin',component:UserloginComponent
  },
  {
    path:'Schedule',component:ScheduleComponent
  },
  {
    path:'booking',component:BookingComponent, canActivate: [authGuard], data: { role: 'Passenger' } 
  },
  {
    path:'userregistration',component:UserregistrationComponent
  },
  {
    path:'schedulecurd',component:SchedulecurdComponent, canActivate: [authGuard], data: { role: 'Software Developer' } 
  },
  {
    path:'bookingpost',component:BookingPostComponent,canActivate: [authGuard], data: { role: 'Passenger' } 
  },
  {
    path:'bookingpost/:{scheduleId}',component:BookingPostComponent,canActivate: [authGuard], data: { role: 'Passenger' } 
  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'admindashboard',component:AdmindashboardComponent, canActivate: [authGuard], data: { role: 'Software Developer' } 
  },
  {
    path:'user',component:UserComponent,canActivate: [authGuard], data: { role: 'Software Developer' } 
  },
  {
    path:'payment',component:PaymentComponent,canActivate: [authGuard], data: { role: 'Passenger' } 
  },
  {
    path:'userdashboard',component:UserdashboardComponent,canActivate: [authGuard], data: { role: 'Passenger' } 
  },
  {
    path:'checkin',component:CheckInComponent
  },
  {
    path:'unauthorized',component:UnauthorizedComponent
  }
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

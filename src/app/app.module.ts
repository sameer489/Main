import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ScheduleService } from './schedule.service';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BookingComponent } from './booking/booking.component'; 
// import { RouterModule,Routes } from '@angular/router';
import { BookingService } from './booking.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserService } from './user.service';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SchedulecurdComponent } from './schedulecurd/schedulecurd.component';
import { BookingPostComponent } from './booking-post/booking-post.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthInterceptor } from './auth.interceptor';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckInService } from './check-in.service';
import { CheckInComponent } from './check-in/check-in.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';




@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    BookingComponent,
    UserloginComponent,
    UserregistrationComponent,
    HomePageComponent,
    SchedulecurdComponent,
    BookingPostComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    UserdashboardComponent,
    NavbarComponent,
    UserComponent,
    PaymentComponent,
    CheckInComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [
    
    provideClientHydration(),
    ScheduleService,
    BookingService,
    UserService,
    CheckInService,
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

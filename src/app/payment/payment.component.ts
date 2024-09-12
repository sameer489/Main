import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// declare var Rozorpay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  bookingId: number | null = null;
  name: string | null = null;
  email: string | null = null;
  no_of_Sets: number | null = null;
  totalAmount: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("Query Params in PaymentComponent:", params);
      this.bookingId = params['bookingId'] ? Number(params['bookingId']) : null;
     
  
      
    });
    const bookingData = localStorage.getItem('bookingData');

    if (bookingData) {
      
      const parsedData = JSON.parse(bookingData);
      this.name = parsedData.name || null;
      this.email = parsedData.email || null;
      this.no_of_Sets = parsedData.no_of_Sets ? Number(parsedData.no_of_Sets) : null;
      this.totalAmount = parsedData.totalAmount ? Number(parsedData.totalAmount) : null;
  }

}
    
  
  
}
   
//   payNow()
//   {
//     const RozorpayOptions={
//     description:'Ticket Booking',
//     currency:'INR',
//     amount:2000,
//     name:'sameer',
//     key:'',
//     prefill:
//     {
//       name:'ashok',
//       email:'ashok@gmail.com'
//     },
//     theme:
//     {
//       color:'#f37254'
//     },
//     modal:
//     {
//       ondismiss:()=>
//       {
//         console.log('dismissed')
//       }
//     }
//     }


//     const successCallback=(paymentid:any)=>
//     {
//       console.log(paymentid);
      
//     }

//     const failureCallback=(e:any)=>
//       {
//         console.log(e);
        
//       }

//       // Rozorpay.open(RozorpayOptions,successCallback,failureCallback)

//   }
// }

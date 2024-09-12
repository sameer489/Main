import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { error } from 'console';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata:any;


  constructor(private user:UserService){}

  ngOnInit(): void {

    this.getusers();
  }
  getusers()
  {
    this.user.getusers().subscribe((data)=>
    {
      this.userdata=data;
    },
    (error) => {
      console.log("get users not working");
    }
  );
  
  }
  deleteuser(id: number)
  {
      this.user.deleteuser(id).subscribe((data)=>
      {
          this.getusers();
      },
      (error)=>
      {
        console.log("delete function not working ");
      }
    )
  }

}

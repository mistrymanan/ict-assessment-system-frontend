import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../../../models/admin-user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  adminuser: AdminUser[]
  constructor(private adminuserservice:UserService) {

   }

  ngOnInit(): void {
    this.getAdminUser();
  
  }
getAdminUser(){
  this.adminuserservice.getadminUser().subscribe(
    (response)=>{
      this.adminuser=response
    console.log(this.adminuser)
    }
  )
}
}

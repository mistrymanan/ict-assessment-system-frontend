import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../../../models/admin-user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  adminuser: AdminUser[];
  dtOptions: any = {};
  constructor(private adminuserservice:UserService) {

   }
  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true,
      dom: 'lBfrtip',
      buttons: ['copy', 'csv', 'excel', 'print']
    };

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

toggleAdminAccess(user:AdminUser): void {
  this.adminuserservice.patchAdminAccess(user.emailId).subscribe(
    () => {
      const current = user.isAdmin;
      user.isAdmin =! current;
    }
  );
}

toggleClassroomCreation(user:AdminUser): void {
  this.adminuserservice.patchClassroomCreationAccess(user.emailId).subscribe(
    () => {
      const current = user.allowedClassroomCreation;
      user.allowedClassroomCreation =! current;
    }
  );
}
}
